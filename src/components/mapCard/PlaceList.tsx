import ExternalLink from '@/components/externalLink/ExternalLink'
import { GLUTEN_FREE_LABELS } from '@/constants/places'
import { visuallyHidden } from '@/styles/shared.css'
import type { LocationCoordinates } from '@/types/location'
import type { Place } from '@/types/place'
import { distanceInMetres, formatDistance } from '@/utils/distance'
import {
  placeList,
  placeListDetail,
  placeListDot,
  placeListItem,
  placeListLevel,
  placeListLinks,
  placeListName,
  placeListShowButton,
} from './PlaceList.css'
import { placeMarkerColor } from './placeMarkerColor'

type PlaceListProps = {
  id: string
  places: Place[]
  searchCentre: LocationCoordinates
  onShowOnMap: (placeId: string) => void
}

const PlaceList = ({ id, places, searchCentre, onShowOnMap }: PlaceListProps) => {
  const placesByDistance = places
    .map((place) => ({ place, distance: distanceInMetres(searchCentre, place.position) }))
    .sort((a, b) => a.distance - b.distance)

  return (
    <ul id={id} className={placeList} aria-label="Gluten-free places, nearest first">
      {placesByDistance.map(({ place, distance }) => (
        <li key={place.id} className={placeListItem}>
          <p className={placeListName}>{place.name}</p>
          <p className={placeListLevel}>
            <span
              aria-hidden="true"
              className={placeListDot}
              style={{ backgroundColor: placeMarkerColor[place.glutenFree] }}
            />
            {GLUTEN_FREE_LABELS[place.glutenFree]}
          </p>
          <p className={placeListDetail}>
            {[formatDistance(distance), place.cuisine, place.address].filter(Boolean).join(' · ')}
          </p>
          <div className={placeListLinks}>
            <button
              type="button"
              className={placeListShowButton}
              onClick={() => onShowOnMap(place.id)}
            >
              Show<span className={visuallyHidden}> {place.name}</span> on map
            </button>
            {place.website && (
              <ExternalLink href={place.website} className={placeListShowButton}>
                Website<span className={visuallyHidden}> for {place.name}</span>
              </ExternalLink>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PlaceList
