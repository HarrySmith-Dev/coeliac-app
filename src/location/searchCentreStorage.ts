import type { LocationCoordinates } from './types'

const STORAGE_KEY = 'coeliac-app:search-centre'

const isCoordinates = (value: unknown): value is LocationCoordinates =>
  Array.isArray(value) && value.length === 2 && value.every(Number.isFinite)

export const loadSearchCentre = (): LocationCoordinates | null => {
  try {
    const saved: unknown = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? 'null')
    return isCoordinates(saved) ? saved : null
  } catch {
    return null
  }
}

export const saveSearchCentre = (centre: LocationCoordinates) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(centre))
  } catch (error) {
    console.warn('Unable to save search area', error)
  }
}
