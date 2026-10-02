import type { CircleMarker as LeafletCircleMarker } from 'leaflet'
import type { Ref } from 'react'
import { CircleMarker, Popup } from 'react-leaflet'
import ExternalLink from '@/components/externalLink/ExternalLink'
import { GLUTEN_FREE_LABELS } from '@/constants/places'
import { colors } from '@/styles/tokens'
import type { Place } from '@/types/place'
import { placeMarkerColor } from './placeMarkerColor'
import { placePopupCuisine, placePopupDetail, placePopupLevel, placePopupName } from './MapCard.css'

type PlaceMarkerProps = {
  place: Place
  ref?: Ref<LeafletCircleMarker>
}

const PlaceMarker = ({ place, ref }: PlaceMarkerProps) => {
  const { name, position, glutenFree, cuisine, address, website } = place

  return (
    <CircleMarker
      ref={ref}
      center={position}
      radius={7}
      pathOptions={{
        color: colors.surface,
        weight: 2,
        fillColor: placeMarkerColor[glutenFree],
        fillOpacity: 1,
      }}
    >
      <Popup>
        <div className={placePopupName}>{name}</div>
        <div className={placePopupLevel}>{GLUTEN_FREE_LABELS[glutenFree]}</div>
        {cuisine && <div className={placePopupCuisine}>{cuisine}</div>}
        {address && <div className={placePopupDetail}>{address}</div>}
        {website && <ExternalLink href={website}>Visit {name}'s website</ExternalLink>}
      </Popup>
    </CircleMarker>
  )
}

export default PlaceMarker
