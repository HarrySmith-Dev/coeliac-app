import { useState } from 'react'
import mapIcon from '../../assets/mapIcon.svg'
import { nearMeButtonContainer, nearMeButtonDesktop, nearMeButtonIcon } from './NearMeButton.css'

export type LocationCoordinates = [number, number]

type NearMeButtonProps = {
  onLocationFound: (location: LocationCoordinates) => void
  desktop?: boolean
}

const NearMeButton = ({ onLocationFound, desktop = false }: NearMeButtonProps) => {
  const [isRequestingLocation, setIsRequestingLocation] = useState(false)

  const requestLocation = () => {
    if (!('geolocation' in navigator) || isRequestingLocation) {
      return
    }

    setIsRequestingLocation(true)
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        onLocationFound([coords.latitude, coords.longitude])
        setIsRequestingLocation(false)
      },
      () => {
        setIsRequestingLocation(false)
      },
      { enableHighAccuracy: false, maximumAge: 300000, timeout: 10000 },
    )
  }

  return (
    <button
      className={`${nearMeButtonContainer} ${desktop ? nearMeButtonDesktop : ''}`}
      onClick={requestLocation}
      disabled={isRequestingLocation}
    >
      <img src={mapIcon} alt="Map Icon" className={nearMeButtonIcon} />
      {isRequestingLocation ? 'Finding your location...' : 'Find gluten-free spots near me'}
    </button>
  )
}

export default NearMeButton
