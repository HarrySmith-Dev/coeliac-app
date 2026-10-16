import AxeBuilder from '@axe-core/playwright'
import { expect, test } from './fixtures.ts'

const pages = [
  { path: '/', title: 'Gluten Free & Me', heading: 'Find gluten-free food near you' },
  {
    path: '/about',
    title: 'About coeliac disease | Gluten Free & Me',
    heading: 'About coeliac disease',
  },
  { path: '/map', title: 'Gluten-free map | Gluten Free & Me', heading: 'Gluten-free places map' },
  { path: '/sources', title: 'Sources | Gluten Free & Me', heading: 'Sources' },
  { path: '/privacy', title: 'Privacy | Gluten Free & Me', heading: 'Privacy' },
  {
    path: '/not-a-real-page',
    title: 'Page not found | Gluten Free & Me',
    heading: 'Page not found',
  },
]

for (const { path, title, heading } of pages) {
  test(`${path} loads with its title and heading and has no accessibility violations`, async ({
    page,
  }) => {
    await page.goto(path)

    await expect(page).toHaveTitle(title)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    await expect(page.getByText('Loading map...')).toHaveCount(0)

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })
}

test('the skip link moves focus to the main content', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Skip links are for keyboard users')
  await page.goto('/about')

  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')

  await expect(page.getByRole('main')).toBeFocused()
})
