import { CircleMarker, Popup } from 'react-leaflet'
import type { Place } from '@/types/place'
import { colors } from '@/styles/tokens'
import { placePopupCuisine, placePopupDetail, placePopupLevel, placePopupName } from './MapCard.css'

const glutenFreeLabel = {
  only: 'Dedicated gluten-free',
  yes: 'Gluten-free options',
}

const markerColor = {
  only: colors.accent,
  yes: colors.primary,
}

const PlaceMarker = ({ place }: { place: Place }) => {
  const { name, position, glutenFree, cuisine, address, website } = place

  return (
    <CircleMarker
      center={position}
      radius={7}
      pathOptions={{
        color: colors.surface,
        weight: 2,
        fillColor: markerColor[glutenFree],
        fillOpacity: 1,
      }}
    >
      <Popup>
        <div className={placePopupName}>{name}</div>
        <div className={placePopupLevel}>{glutenFreeLabel[glutenFree]}</div>
        {cuisine && <div className={placePopupCuisine}>{cuisine}</div>}
        {address && <div className={placePopupDetail}>{address}</div>}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
      </Popup>
    </CircleMarker>
  )
}

export default PlaceMarker
