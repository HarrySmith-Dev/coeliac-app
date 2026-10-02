import type { LocationCoordinates } from './location'

export type GlutenFreeLevel = 'only' | 'yes'

export type Place = {
  id: string
  name: string
  position: LocationCoordinates
  glutenFree: GlutenFreeLevel
  cuisine?: string
  address?: string
  website?: string
}
