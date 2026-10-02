import type { LocationCoordinates } from '../types/location'

export const roundCoordinates = ([lat, lng]: LocationCoordinates): LocationCoordinates => [
  Math.round(lat * 1000) / 1000,
  Math.round(lng * 1000) / 1000,
]
