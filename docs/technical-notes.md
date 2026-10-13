# Technical notes

More detail on how the app works, for anyone reading or changing the code.

## How the map data works

Places come from the public [Overpass API](https://overpass-api.de), which searches OpenStreetMap for restaurants, cafes and fast food places tagged `diet:gluten_free=yes` or `only`. The public server is free but rate-limited and sometimes overloaded, so the app:

- keeps the search radius small (1 km) and only searches when the user asks (Near Me or Search this area)
- tells Overpass to stop after 15 seconds, and gives up on the client after 20 seconds if there's no response at all
- retries network errors, rate limits (429) and server errors (5xx) up to 3 times with a growing delay, but not bad requests
- treats Overpass's "timed out" responses (a 200 with a `remark`) as failures, so partial results are never shown
- rounds the search location to about 100 m so nearby searches share a cache entry
- caches results for 24 hours and persists them to `localStorage`, so a page refresh doesn't fetch again
- cancels in-flight requests when a new area is searched, so stale results can't overwrite newer ones

Website links come from community-edited OpenStreetMap data, so they're cleaned before use: only `http` and `https` URLs are allowed, and `https://` is added if it's missing.

Coverage depends on what volunteers have tagged, so some gluten-free-friendly places will be missing. You can improve the data for everyone by [adding them to OpenStreetMap](https://www.openstreetmap.org/).

## Location and search area

`LocationProvider` keeps two separate locations:

- **User location:** where the user is, shown as the blue dot. Only requested when the user clicks Near Me, or read silently on load if they've already granted permission.
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

The error boundary can be tested in development by visiting `/dev/error`.

## Performance

- **Lazy-loaded map.** `LazyMapCard` loads `MapCard` with `React.lazy` and a dynamic `import()`, so Vite splits the map card, Leaflet and Leaflet's CSS into a separate file. Pages without a map (About, Privacy, Sources) never download it, which cuts their JavaScript from 144 KB to 96 KB (gzipped).
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

## Conventions

- **Imports:** use the `@/` alias for anything outside the current folder (`@/hooks/useUserLocation`) and relative paths for files in the same folder (`./MapCard.css`).
- **Styles:** each component has a `.css.ts` file next to it. Use the colours and fonts from `src/styles/tokens.ts`, and the shared heading, text, link and button styles in `src/styles/shared.css.ts`, rather than hard-coding values.
- **Content:** page text, FAQs, statistics and the privacy notice live in `src/data`. Every FAQ and statistic must have a source from `src/data/sources.ts`, and `contentLastReviewed` in `src/data/coeliacContent.ts` should be updated whenever the content is re-checked.

## Commands

| Command             | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `yarn dev`          | Start the dev server with hot reload             |
| `yarn build`        | Type-check and build for production into `dist/` |
| `yarn preview`      | Serve the production build locally               |
| `yarn lint`         | Run ESLint                                       |
| `yarn format`       | Format all files with Prettier                   |
| `yarn format:check` | Check formatting without changing files          |
