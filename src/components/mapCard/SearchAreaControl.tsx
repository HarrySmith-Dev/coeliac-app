import { DomEvent } from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'
import { useUserLocation } from '@/hooks/useUserLocation'
import { MIN_SEARCH_DISTANCE_METRES, MIN_SEARCH_ZOOM } from '@/constants/map'
import { searchAreaButton, searchAreaControl, searchAreaHint } from './MapCard.css'

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
