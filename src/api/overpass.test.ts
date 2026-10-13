import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchGlutenFreePlaces, OverpassError } from './overpass'

const location: [number, number] = [51.505, -0.09]

const mockFetch = (response: Response) => {
  const fetchMock = vi.fn().mockResolvedValue(response)
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

const mockFetchError = (error: Error) => {
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(error))
}

const overpassResponse = (body: object) => new Response(JSON.stringify(body), { status: 200 })

const fetchPlaces = () => fetchGlutenFreePlaces(location, new AbortController().signal)

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('fetchGlutenFreePlaces', () => {
  it('sends a query for gluten-free places around the location', async () => {
    const fetchMock = mockFetch(overpassResponse({ elements: [] }))

    await fetchPlaces()

    const [url, init] = fetchMock.mock.calls[0]
    const query = (init.body as URLSearchParams).get('data')
    expect(url).toBe('https://overpass-api.de/api/interpreter')
    expect(init.method).toBe('POST')
    expect(query).toContain('around:1000,51.505,-0.09')
    expect(query).toContain('["diet:gluten_free"~"^(yes|only)$"]')
    expect(query).toContain('restaurant|cafe|fast_food')
  })

  it('turns nodes into places', async () => {
    mockFetch(
      overpassResponse({
        elements: [
          {
            type: 'node',
            id: 1,
            lat: 51.5,
            lon: -0.1,
            tags: {
              name: 'The GF Kitchen',
              'diet:gluten_free': 'only',
              cuisine: 'coffee_shop;italian',
              'addr:housenumber': '12',
              'addr:street': 'High Street',
              'addr:postcode': 'SE1 1AA',
              website: 'gfkitchen.example',
            },
          },
        ],
      }),
    )

    expect(await fetchPlaces()).toEqual([
      {
        id: 'node/1',
        name: 'The GF Kitchen',
        position: [51.5, -0.1],
        glutenFree: 'only',
        cuisine: 'Coffee shop, italian',
        address: '12 High Street, SE1 1AA',
        website: 'https://gfkitchen.example/',
      },
    ])
  })

  it('uses the centre of ways and leaves out missing details', async () => {
    mockFetch(
      overpassResponse({
        elements: [
          {
            type: 'way',
            id: 2,
            center: { lat: 51.51, lon: -0.08 },
            tags: { name: 'Cafe', 'diet:gluten_free': 'yes', website: 'javascript:alert(1)' },
          },
        ],
      }),
    )

    expect(await fetchPlaces()).toEqual([
      {
        id: 'way/2',
        name: 'Cafe',
        position: [51.51, -0.08],
        glutenFree: 'yes',
        cuisine: undefined,
        address: undefined,
        website: undefined,
      },
    ])
  })

  it('builds an address from whichever parts are present', async () => {
    mockFetch(
      overpassResponse({
        elements: [
          {
            type: 'node',
            id: 3,
            lat: 51.5,
            lon: -0.1,
            tags: { name: 'Postcode only', 'diet:gluten_free': 'yes', 'addr:postcode': 'E1 6AN' },
          },
          {
            type: 'node',
            id: 4,
            lat: 51.5,
            lon: -0.1,
            tags: { name: 'Street only', 'diet:gluten_free': 'yes', 'addr:street': 'Mill Lane' },
          },
        ],
      }),
    )

    const places = await fetchPlaces()

    expect(places.map((place) => place.address)).toEqual(['E1 6AN', 'Mill Lane'])
  })

  it('skips elements without a name or position', async () => {
    mockFetch(
      overpassResponse({
        elements: [
          { type: 'node', id: 5, lat: 51.5, lon: -0.1, tags: { 'diet:gluten_free': 'yes' } },
          { type: 'way', id: 6, tags: { name: 'No centre', 'diet:gluten_free': 'yes' } },
          { type: 'node', id: 7, lat: 51.5, lon: -0.1 },
        ],
      }),
    )

    expect(await fetchPlaces()).toEqual([])
  })

  it('throws an OverpassError with the status when the request fails', async () => {
    mockFetch(new Response('Too Many Requests', { status: 429 }))

    const error = await fetchPlaces().catch((caught: unknown) => caught)

    expect(error).toBeInstanceOf(OverpassError)
    expect(error).toMatchObject({ status: 429, message: 'Overpass request failed (429)' })
  })

  it('throws an OverpassError when Overpass returns a remark', async () => {
    mockFetch(overpassResponse({ elements: [], remark: 'runtime error: Query timed out' }))

    await expect(fetchPlaces()).rejects.toThrow(new OverpassError('runtime error: Query timed out'))
  })

  it('throws an OverpassError when the request times out', async () => {
    mockFetchError(new DOMException('The operation timed out', 'TimeoutError'))

    const error = await fetchPlaces().catch((caught: unknown) => caught)

    expect(error).toBeInstanceOf(OverpassError)
    expect(error).toMatchObject({ status: undefined, message: 'Overpass request timed out' })
  })

  it('rethrows other errors unchanged', async () => {
    const networkError = new TypeError('Failed to fetch')
    mockFetchError(networkError)

    await expect(fetchPlaces()).rejects.toBe(networkError)
  })
})
