import { latLng } from 'leaflet'
import type { LocationCoordinates } from '@/types/location'

export const distanceInMetres = (from: LocationCoordinates, to: LocationCoordinates) =>
  latLng(from).distanceTo(to)

export const formatDistance = (metres: number) =>
  metres < 1000 ? `${Math.round(metres / 10) * 10} m` : `${(metres / 1000).toFixed(1)} km`
