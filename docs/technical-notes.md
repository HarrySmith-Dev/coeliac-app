# Technical notes

More detail on how the app works, for anyone reading or changing the code.

## How the map data works

Places come from the public [Overpass API](https://overpass-api.de), which searches OpenStreetMap for restaurants, cafes and fast food places tagged `diet:gluten_free=yes` or `only`. The public server is free but rate-limited and sometimes overloaded, so the app:

- keeps the search radius small (1 km) and only searches when the user asks (Near Me or Search this area), or on load if they've already given the site location permission
- tells Overpass to stop after 15 seconds, and gives up on each request after 20 seconds if there's no response at all
- retries network errors, timeouts, rate limits (429) and server errors (5xx) up to 2 more times, waiting 5 seconds and then 15 seconds so a busy server has time to clear its queue, but doesn't retry bad requests (4xx)
- shows a "still searching" message if a search takes longer than 5 seconds
- tells the user the service is busy and to try again in a minute if it's still overloaded (429, 502, 503 or 504) after the retries, and that it's unavailable if Overpass blocks the request (403 or 406)
- treats Overpass's "timed out" responses (a 200 with a `remark`) as failures, so partial results are never shown
- rounds the search location to about 100 m so nearby searches share a cache entry
- caches results for 24 hours and persists them to `localStorage`, so a page refresh doesn't fetch again
- cancels in-flight requests when a new area is searched, so stale results can't overwrite newer ones

Website links come from community-edited OpenStreetMap data, so they're cleaned before use: only `http` and `https` URLs are allowed, and `https://` is added if it's missing.

Coverage depends on what volunteers have tagged, so some gluten-free-friendly places will be missing. You can improve the data for everyone by [adding them to OpenStreetMap](https://www.openstreetmap.org/).

Map tiles come straight from OpenStreetMap's tile servers, which are free but have no usage dashboard or quota and can block sites they consider heavy users. To keep the number of tiles each visit loads low, the map:

- can't be panned outside the UK, or zoomed out past the whole UK (zoom 6) or in past street level (zoom 18)
- keeps only one screen's worth of tiles loaded around the visible area, instead of Leaflet's default of two

If traffic grows, switch to a tile provider with an API key and a monthly quota (see the note on the Content Security Policy below).

## Location and search area

`LocationProvider` keeps two separate locations:

- **User location:** where the user is, shown as the blue dot. Only requested when the user clicks Near Me (**Find gluten-free spots near me**), or read silently on load if they've already granted permission.
- **Search centre:** the area being searched. Set by Near Me or by Search this area, and saved to `sessionStorage` so a refresh reopens the same area.

Moving the map to the user is an explicit "focus" request rather than a side effect of the location changing, so clicking Near Me always re-centres the map, even if the position hasn't changed.

In development, the app pretends the user is in central London so there are always places to test with. Set `devLocationOverride` to `null` in `src/context/LocationProvider.tsx` to use your real location. This never applies to production builds.

## Accessibility

- Landmarks (`header`, `main`, `nav`, `footer`), a page title and an `h1` on every page, and a skip link
- The map has a list view, so every place can be reached and opened with a keyboard or screen reader
- Map status updates (searching, results, errors) are announced with `aria-live`
- Links that open a new tab say so to screen readers
- Colours meet WCAG AA contrast, focus rings are visible everywhere, and tap targets are at least 24px
- Smooth scrolling respects `prefers-reduced-motion`

## Performance

- **Lazy-loaded map.** `LazyMapCard` loads `MapCard` with `React.lazy` and a dynamic `import()`, so Vite splits the map card, Leaflet and Leaflet's CSS into a separate file. Pages without a map (About, Privacy, Sources) never download it, which cuts their JavaScript from about 153 KB to 102 KB (gzipped).
- **No layout shift while the map loads.** The `Suspense` fallback is a placeholder built from the same styles as the real map card, so the page doesn't move when the map arrives.
- **No background preloading.** Downloading the map file in the background after page load was tested and made content pages slower in Lighthouse's simulated mobile test, so the map is only downloaded when a page needs it. The trade-off is a brief "Loading map..." placeholder the first time someone opens a page with a map.
- **Fonts.** Inter and Fraunces are self-hosted (Latin characters only), and the three fonts visible on first load are preloaded in `index.html` so text doesn't reflow when they arrive.

Lighthouse (mobile, production build): 99 on About, Privacy and Sources, 94 on Home, around 84 on the Map page, where the largest content is the map tiles loaded from OpenStreetMap. Accessibility is 100 on every page.

## Deployment

The app is deployed on [Vercel](https://vercel.com), which detects the Vite setup automatically (build command `yarn build`, output directory `dist`).

`vercel.json` configures:

- **Routing:** every path serves `index.html`, so links like `/about` work when opened directly or refreshed.
- **Security headers:** a Content Security Policy that only allows the app's own files, OpenStreetMap tiles and the Overpass API, plus `X-Content-Type-Options`, `Referrer-Policy` and a `Permissions-Policy` that only allows location access.
- **Caching:** files in `/assets` have hashed names, so browsers cache them for a year.

If you add a new external service (for example a different map tile provider), add its domain to the Content Security Policy in `vercel.json`, or the browser will block it.

### Analytics

[Vercel Web Analytics](https://vercel.com/docs/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights) are added in `main.tsx` and switched on in the Vercel dashboard. Both are cookieless and are described in the privacy notice. On Vercel their scripts load from `/_vercel/...` on the site's own domain, so they don't need Content Security Policy entries. In development they only log to the console.

### Search engines and link previews

- **Site URL:** the production URL is `SITE_URL` in `src/constants/site.ts`. If the domain changes, also update `index.html`, `public/sitemap.xml`, `public/robots.txt` and the URL printed on `public/og-image.png`.
- **Canonical link:** `index.html` sets it to the home page, and `useCanonicalUrl` updates it to the current route on every navigation.
- **Link previews:** Open Graph and Twitter card tags in `index.html` use `public/og-image.png` (1200×630).
- **Sitemap:** `public/sitemap.xml` lists every page and is linked from `robots.txt`. Add new routes to it.
- **404s:** because every path serves `index.html`, unknown URLs return a 200 status. The Page not found page adds a `noindex` meta tag so search engines don't index them.

## Conventions

- **Imports:** use the `@/` alias for anything outside the current folder (`@/hooks/useUserLocation`) and relative paths for files in the same folder (`./MapCard.css`).
- **Styles:** each component has a `.css.ts` file next to it. Use the colours and fonts from `src/styles/tokens.ts`, and the shared heading, text, link and button styles in `src/styles/shared.css.ts`, rather than hard-coding values.
- **Content:** page text, FAQs, statistics and the privacy notice live in `src/data`. Every FAQ and statistic must have a source from `src/data/sources.ts`, and `contentLastReviewed` in `src/data/coeliacContent.ts` should be updated whenever the content is re-checked.

## Testing and CI

There are two kinds of tests:

- **Unit tests** use [Vitest](https://vitest.dev) and sit next to the code they test (`overpass.test.ts` next to `overpass.ts`). They cover the logic most likely to break, which is the code handling the unreliable API and the community-edited data:
  - **Overpass client:** the query sent, turning nodes and ways into places, building addresses, skipping places with no name or position, and turning failed requests, timeouts and `remark` responses into errors
  - **Retry rules:** which errors are retried, treated as blocked or treated as busy, and how long to wait between retries
  - **Map status:** which message the map shows for each combination of location, loading, error and result states (`mapStatus.ts`)
  - **Helpers:** cleaning website links, rounding coordinates and formatting distances
- **End-to-end tests** use [Playwright](https://playwright.dev) and live in `e2e/`. They build the app, serve the production build and drive it in Chromium, at desktop size and as a mobile phone. They cover:
  - every page loading with the right title and `h1`, with no WCAG 2.2 AA problems found by [axe](https://github.com/dequelabs/axe-core)
  - Near Me finding places, the list view sorting them nearest first, and Show on map opening the right popup
  - searching automatically on load when location was already allowed
  - Search this area working without sharing a location, including after dragging the map
  - the busy and blocked messages, and Try again
  - the message shown when location access is denied
  - the skip link

The end-to-end tests never call the real Overpass API or OpenStreetMap tile servers. `e2e/fixtures.ts` replaces Overpass with fixed places near central London and tiles with a blank image, so the tests are reliable and don't use up the free services. The busy test uses Playwright's fake clock to skip the retry delays instead of waiting 20 seconds.

There are no component tests. Most components either just render content, or render Leaflet, which needs a real browser and is covered by the end-to-end tests instead.

[GitHub Actions](../.github/workflows/ci.yml) runs on every pull request and every push to `master`, with two jobs that run side by side. Both install dependencies from the lockfile using the Node version in `.nvmrc`:

- **Format, lint, test and build:** checks formatting, lints, runs the unit tests and does a type-checked build.
- **End-to-end tests:** installs Chromium and runs the Playwright tests. If they fail, the HTML report (with a trace of each failed test) is uploaded to the run for 7 days.

A new push cancels any run still going on the same branch.

[Dependabot](../.github/dependabot.yml) checks for updates every Monday:

- **npm packages:** minor and patch updates are grouped into one pull request for production dependencies and one for development dependencies. Major updates come as separate pull requests.
- **Cooldown:** a new release is only suggested once it's a few days old (3 days for patches, 7 for minor and 14 for major), so a broken or compromised release is likely to be caught before it's picked up.
- **`@types/node`:** major updates are ignored so the types stay on Node 24, matching `.nvmrc`.
- **GitHub Actions:** the actions used in CI are updated in one grouped pull request.

## Commands

| Command             | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `yarn dev`          | Start the dev server with hot reload             |
| `yarn build`        | Type-check and build for production into `dist/` |
| `yarn preview`      | Serve the production build locally               |
| `yarn lint`         | Run ESLint                                       |
| `yarn test`         | Run the unit tests once                          |
| `yarn test:watch`   | Run the unit tests and re-run them on changes    |
| `yarn test:e2e`     | Build the app and run the end-to-end tests       |
| `yarn format`       | Format all files with Prettier                   |
| `yarn format:check` | Check formatting without changing files          |

Before running `yarn test:e2e` for the first time, download the browser with `yarn playwright install chromium`.
