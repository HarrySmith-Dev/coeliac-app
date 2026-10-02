import { SEARCH_RADIUS_METRES } from '@/constants/map'
import type { LocationCoordinates } from '@/types/location'
import type { GlutenFreeLevel, Place } from '@/types/place'
import { toSafeUrl } from '@/utils/url'

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter'

const AMENITIES = ['restaurant', 'cafe', 'fast_food']

type OverpassElement = {
  type: 'node' | 'way' | 'relation'
  id: number
  lat?: number
  lon?: number
  center?: { lat: number; lon: number }
  tags?: Record<string, string>
}

type OverpassResponse = {
  elements: OverpassElement[]
  remark?: string
}

export class OverpassError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'OverpassError'
    this.status = status
  }
}

const buildQuery = ([lat, lng]: LocationCoordinates) => {
  const filters =
    `["amenity"~"^(${AMENITIES.join('|')})$"]` +
    `["diet:gluten_free"~"^(yes|only)$"]` +
    `(around:${SEARCH_RADIUS_METRES},${lat},${lng})`

  return `[out:json][timeout:15];(node${filters};way${filters};);out center tags;`
}

const formatCuisine = (cuisine?: string) => {
  const formatted = cuisine?.replaceAll('_', ' ').replaceAll(';', ', ')
  return formatted && formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

const toPlace = ({ type, id, lat, lon, center, tags = {} }: OverpassElement): Place | null => {
  const latitude = lat ?? center?.lat
  const longitude = lon ?? center?.lon

  if (latitude === undefined || longitude === undefined || !tags.name) {
    return null
  }

  const street = [tags['addr:housenumber'], tags['addr:street']].filter(Boolean).join(' ')
  const address = [street, tags['addr:postcode']].filter(Boolean).join(', ')

  return {
    id: `${type}/${id}`,
    name: tags.name,
    position: [latitude, longitude],
    glutenFree: tags['diet:gluten_free'] as GlutenFreeLevel,
    cuisine: formatCuisine(tags.cuisine),
    address: address || undefined,
    website: toSafeUrl(tags.website),
  }
}

export const fetchGlutenFreePlaces = async (
  location: LocationCoordinates,
  signal: AbortSignal,
): Promise<Place[]> => {
  const response = await fetch(OVERPASS_URL, {
    method: 'POST',
    body: new URLSearchParams({ data: buildQuery(location) }),
    signal,
  })

  if (!response.ok) {
    throw new OverpassError(`Overpass request failed (${response.status})`, response.status)
  }

  const data: OverpassResponse = await response.json()

  if (data.remark) {
    throw new OverpassError(data.remark)
  }

  return data.elements.map(toPlace).filter((place) => place !== null)
}
