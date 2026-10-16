import { test as base, type Page, type Request } from '@playwright/test'

export const LONDON = { latitude: 51.505, longitude: -0.09 }

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter'

const BLANK_TILE = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64',
)

const node = (id: number, name: string, lat: number, lon: number, tags = {}) => ({
  type: 'node',
  id,
  lat,
  lon,
  tags: { name, amenity: 'cafe', 'diet:gluten_free': 'yes', ...tags },
})

export const londonPlaces = [
  node(1, 'Middle Cafe', 51.5095, -0.09),
  node(2, 'Nearest Bakery', 51.5065, -0.09, { 'diet:gluten_free': 'only' }),
  node(3, 'Furthest Diner', 51.513, -0.09, { website: 'furthest.example' }),
]

export const searchCentreOf = (request: Request) => {
  const query = new URLSearchParams(request.postData() ?? '').get('data') ?? ''
  const [, lat, lng] = query.match(/around:\d+,(-?[\d.]+),(-?[\d.]+)/) ?? []
  return { lat: Number(lat), lng: Number(lng) }
}

type OverpassReply = { elements: unknown[] } | { status: number }

export class OverpassMock {
  requests: Request[] = []
  private reply: OverpassReply = { elements: londonPlaces }
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  async install() {
    await this.page.route(OVERPASS_URL, (route) => {
      this.requests.push(route.request())
      if ('status' in this.reply) {
        return route.fulfill({ status: this.reply.status, body: 'Overpass mock error' })
      }
      return route.fulfill({ json: { elements: this.reply.elements } })
    })
  }

  respondWith(reply: OverpassReply) {
    this.reply = reply
  }
}

export const test = base.extend<{ overpass: OverpassMock }>({
  page: async ({ page }, use) => {
    await page.route('https://tile.openstreetmap.org/**', (route) =>
      route.fulfill({ contentType: 'image/png', body: BLANK_TILE }),
    )
    await use(page)
  },
  overpass: [
    async ({ page }, use) => {
      const overpass = new OverpassMock(page)
      await overpass.install()
      await use(overpass)
    },
    { auto: true },
  ],
})

export { expect } from '@playwright/test'
