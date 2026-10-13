import type { LatLngBoundsExpression } from 'leaflet'
import type { LocationCoordinates } from '@/types/location'

export const DEFAULT_LOCATION: LocationCoordinates = [51.505, -0.09]

export const SEARCH_RADIUS_METRES = 1000

export const MIN_SEARCH_DISTANCE_METRES = SEARCH_RADIUS_METRES / 2

export const MIN_SEARCH_ZOOM = 13

export const NEARBY_ZOOM = 14

export const MAP_MIN_ZOOM = 6

export const MAP_MAX_ZOOM = 18

export const MAP_BOUNDS: LatLngBoundsExpression = [
  [49, -11],
  [61, 2.5],
]

export const TILE_KEEP_BUFFER = 1
