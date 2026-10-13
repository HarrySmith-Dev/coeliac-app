# Gluten Free & Me

A web app for people living with coeliac disease. It explains the condition in plain English and helps you find restaurants, cafes and takeaways near you that offer gluten-free food.

## Features

- **Gluten-free places map:** shows nearby places tagged as gluten-free in OpenStreetMap, colour-coded by whether they are dedicated gluten-free or simply offer gluten-free options. Tap a marker for the address, cuisine and website.
- **Find near me:** uses your location to search within 1 km. If you'd rather not share your location, drag the map and use **Search this area**.
- **Coeliac disease information:** key facts, common symptoms and an FAQ, with every answer linked to its source (NHS, Coeliac UK and GOV.UK).
- **Fast reloads:** search results are cached for 24 hours, so refreshing the page or returning to an area you've already searched doesn't fetch them again.

The information in the app is general guidance, not medical advice.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org), built with [Vite](https://vite.dev)
- [React Router](https://reactrouter.com) for pages
- [vanilla-extract](https://vanilla-extract.style) for type-safe CSS
- [Leaflet](https://leafletjs.com) + [react-leaflet](https://react-leaflet.js.org) for the map, with OpenStreetMap tiles
- [TanStack Query](https://tanstack.com/query) for fetching, caching and persisting place data
- [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) for querying OpenStreetMap

## Getting started

You'll need Node.js 20.19+ or 22.12+ (required by Vite) and Yarn.

```bash
yarn install
yarn dev
```

Then open the URL Vite prints (usually http://localhost:5173).

| Command             | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `yarn dev`          | Start the dev server with hot reload             |
| `yarn build`        | Type-check and build for production into `dist/` |
| `yarn preview`      | Serve the production build locally               |
| `yarn lint`         | Run ESLint                                       |
| `yarn format`       | Format all files with Prettier                   |
| `yarn format:check` | Check formatting without changing files          |

### Development location

In development, the app pretends you're in central London so there are always places on the map to test with. To use your real location instead, set `devLocationOverride` to `null` in `src/context/LocationProvider.tsx`. This never applies to production builds.

## Project structure

```
src/
├── api/          Calls to external services (Overpass API)
├── assets/       Icons and images
├── components/   Reusable UI components, one folder each with its styles
├── constants/    Shared fixed values (search radius, zoom levels, cache times)
├── context/      React context and providers (user location and search area)
├── data/         Static content: page text, FAQs, sources, navigation links
├── hooks/        Custom React hooks
├── lib/          Setup for third-party libraries (TanStack Query client)
├── pages/        One folder per page: home, about, map
├── styles/       Global styles, shared styles and design tokens
├── types/        Shared TypeScript types
├── utils/        Small helper functions with no React dependencies
├── App.tsx       Layout and routes
└── main.tsx      Entry point and app-wide providers
```

### Conventions

- **Imports:** use the `@/` alias for anything outside the current folder (`@/hooks/useUserLocation`) and relative paths for files in the same folder (`./MapCard.css`).
- **Styles:** each component has a `.css.ts` file next to it. Use the colours and fonts from `src/styles/tokens.ts` and the shared text styles in `src/styles/shared.css.ts` rather than hard-coding values.
- **Content:** page text, FAQs and statistics live in `src/data`. Every FAQ and statistic must have a source from `src/data/sources.ts`, and `contentLastReviewed` in `src/data/coeliacContent.ts` should be updated whenever the content is re-checked.

## How the map data works

Places come from the public [Overpass API](https://overpass-api.de), which searches OpenStreetMap for restaurants, cafes and fast food places tagged `diet:gluten_free=yes` or `only`. The public server is free but rate-limited and sometimes overloaded, so the app:

- keeps the search radius small (1 km)
- only searches when you ask it to (Near Me or Search this area)
- gives up on any request that takes longer than 20 seconds
- retries failed requests with a delay
- caches results for 24 hours in `localStorage`

Coverage depends on what volunteers have tagged, so some gluten-free-friendly places will be missing. You can improve the data for everyone by [adding them to OpenStreetMap](https://www.openstreetmap.org/).

## Deployment

The app is deployed on [Vercel](https://vercel.com). Import the repository and Vercel detects the Vite setup automatically: the build command is `yarn build` and the output directory is `dist`.

`vercel.json` configures:

- **Routing:** every path serves `index.html`, so links like `/about` work when opened directly or refreshed.
- **Security headers:** a Content Security Policy that only allows the app's own files, OpenStreetMap tiles and the Overpass API, plus `X-Content-Type-Options`, `Referrer-Policy` and a `Permissions-Policy` that only allows location access.
- **Caching:** files in `/assets` have hashed names, so browsers cache them for a year.

If you add a new external service (for example a different map tile provider), add its domain to the Content Security Policy in `vercel.json`, or the browser will block it.

## Data and attribution

- Map tiles and place data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), available under the Open Database License.
- Health information is sourced from the [NHS](https://www.nhs.uk/conditions/coeliac-disease/), [Coeliac UK](https://www.coeliac.org.uk/) and [GOV.UK](https://www.gov.uk/understanding-food-labelling/allergen-labelling). The full list is on the app's Sources page.
