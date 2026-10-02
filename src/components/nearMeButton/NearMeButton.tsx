import mapIcon from '@/assets/mapIcon.svg'
import { useUserLocation } from '@/hooks/useUserLocation'
import { nearMeButtonContainer, nearMeButtonDesktop, nearMeButtonIcon } from './NearMeButton.css'

type NearMeButtonProps = {
  desktop?: boolean
}

const NearMeButton = ({ desktop = false }: NearMeButtonProps) => {
  const { isRequestingLocation, requestLocation } = useUserLocation()

  return (
    <button
      className={`${nearMeButtonContainer} ${desktop ? nearMeButtonDesktop : ''}`}
      onClick={requestLocation}
      disabled={isRequestingLocation}
    >
      <img src={mapIcon} alt="" aria-hidden="true" className={nearMeButtonIcon} />
      {isRequestingLocation ? 'Finding your location...' : 'Find gluten-free spots near me'}
    </button>
  )
}

export default NearMeButton
