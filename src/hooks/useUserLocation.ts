import { useContext } from 'react'
import { LocationContext } from '../context/LocationContext'

export const useUserLocation = () => {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error('useUserLocation must be used within a LocationProvider')
  }

  return context
}
