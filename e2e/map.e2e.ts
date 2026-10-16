import { expect, LONDON, searchCentreOf, test } from './fixtures.ts'

const mapStatus = (page: import('@playwright/test').Page) =>
  page.locator('article p[aria-live="polite"]')

test.describe('with location shared', () => {
  test.use({ geolocation: LONDON, permissions: ['geolocation'] })

  test('Near Me finds places, lists them nearest first and shows one on the map', async ({
    page,
    overpass,
  }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Find gluten-free spots near me' }).click()

    await expect(mapStatus(page)).toHaveText('3 gluten-free spots within 1 km')
    expect(searchCentreOf(overpass.requests[0])).toEqual({
      lat: LONDON.latitude,
      lng: LONDON.longitude,
    })

    await page.getByRole('button', { name: 'List view' }).click()
    const list = page.getByRole('list', { name: 'Gluten-free places, nearest first' })
    await expect(list.getByRole('listitem').locator('p:first-child')).toHaveText([
      'Nearest Bakery',
      'Middle Cafe',
      'Furthest Diner',
    ])
    await expect(list.getByRole('link', { name: /Website for Furthest Diner/ })).toHaveAttribute(
      'href',
      'https://furthest.example/',
    )

    await list.getByRole('button', { name: 'Show Middle Cafe on map' }).click()

    await expect(list).toBeHidden()
    await expect(page.locator('.leaflet-popup')).toContainText('Middle Cafe')
  })

  test('searches automatically on load when location was already allowed', async ({ page }) => {
    await page.goto('/map')

    await expect(mapStatus(page)).toHaveText('3 gluten-free spots within 1 km')
  })
})

test('Search this area works without sharing a location', async ({ page, overpass }) => {
  await page.goto('/map')
  await expect(mapStatus(page)).toHaveText('Share your location or search an area of the map')

  await page.getByRole('button', { name: 'Search this area' }).click()
  await expect(mapStatus(page)).toHaveText('3 gluten-free spots within 1 km')
  await expect(page.getByRole('button', { name: 'Search this area' })).toBeHidden()

  const map = page.locator('.leaflet-container')
  const box = (await map.boundingBox())!
  const centre = { x: box.x + box.width / 2, y: box.y + box.height / 2 }
  await page.mouse.move(centre.x, centre.y)
  await page.mouse.down()
  await page.mouse.move(centre.x - 150, centre.y, { steps: 10 })
  await page.mouse.up()

  overpass.respondWith({ elements: [] })
  await page.getByRole('button', { name: 'Search this area' }).click()

  await expect(mapStatus(page)).toHaveText('No gluten-free spots found within 1 km')
  expect(overpass.requests).toHaveLength(2)
  expect(searchCentreOf(overpass.requests[1]).lng).toBeGreaterThan(
    searchCentreOf(overpass.requests[0]).lng,
  )
})

test('tells the user when the search service is busy and lets them try again', async ({
  page,
  overpass,
}) => {
  await page.clock.install()
  overpass.respondWith({ status: 502 })
  await page.goto('/map')
  await page.getByRole('button', { name: 'Search this area' }).click()

  await expect(mapStatus(page)).toHaveText('The place search service is busy, trying again...')
  await expect.poll(() => overpass.requests.length).toBe(1)
  await page.clock.fastForward(5000)
  await expect.poll(() => overpass.requests.length).toBe(2)
  await page.clock.fastForward(15000)
  await expect.poll(() => overpass.requests.length).toBe(3)

  await expect(mapStatus(page)).toContainText(
    'The place search service is busy right now. Please try again in a minute.',
  )

  overpass.respondWith({ elements: [] })
  await page.getByRole('button', { name: 'Try again' }).click()

  await expect(mapStatus(page)).toHaveText('No gluten-free spots found within 1 km')
})

test('does not retry when Overpass blocks the request', async ({ page, overpass }) => {
  overpass.respondWith({ status: 403 })
  await page.goto('/map')
  await page.getByRole('button', { name: 'Search this area' }).click()

  await expect(mapStatus(page)).toHaveText(
    'The place search service is unavailable right now. Please try again later.',
  )
  expect(overpass.requests).toHaveLength(1)
})

test('explains when location access is denied and still allows searching an area', async ({
  page,
  context,
}) => {
  await context.clearPermissions()
  await page.goto('/')
  await page.getByRole('button', { name: 'Find gluten-free spots near me' }).click()

  await expect(mapStatus(page)).toContainText('Location access was denied.')

  await page.getByRole('button', { name: 'Search this area' }).click()
  await expect(mapStatus(page)).toHaveText('3 gluten-free spots within 1 km')
})
