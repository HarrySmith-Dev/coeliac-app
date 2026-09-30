import { DomEvent } from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'
import { useUserLocation } from '../../location/LocationContext'
import { SEARCH_RADIUS_METRES } from '../../places/overpass'
import { searchAreaButton, searchAreaControl, searchAreaHint } from './MapCard.css'

export const MIN_SEARCH_ZOOM = 13

const MIN_SEARCH_DISTANCE_METRES = SEARCH_RADIUS_METRES / 2

const SearchAreaControl = () => {
  const map = useMap()
  const { searchCentre, searchArea } = useUserLocation()
  const controlRef = useRef<HTMLDivElement>(null)

  const [view, setView] = useState(() => ({ centre: map.getCenter(), zoom: map.getZoom() }))

  useMapEvents({
    moveend: () => setView({ centre: map.getCenter(), zoom: map.getZoom() }),
  })

  useEffect(() => {
    if (controlRef.current) {
      DomEvent.disableClickPropagation(controlRef.current)
      DomEvent.disableScrollPropagation(controlRef.current)
    }
  }, [])

  const hasMovedAway =
    !searchCentre || map.distance(view.centre, searchCentre) > MIN_SEARCH_DISTANCE_METRES

  const renderControl = () => {
    if (!hasMovedAway) {
      return null
    }
    if (view.zoom < MIN_SEARCH_ZOOM) {
      return <p className={searchAreaHint}>Zoom in to search this area</p>
    }
    return (
      <button
        type="button"
        className={searchAreaButton}
        onClick={() => searchArea([view.centre.lat, view.centre.lng])}
      >
        Search this area
      </button>
    )
  }

  return (
    <div ref={controlRef} className={searchAreaControl}>
      {renderControl()}
    </div>
  )
}

export default SearchAreaControl
