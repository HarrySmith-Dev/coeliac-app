import MapCard, { type MapLocation } from '../components/mapCard/MapCard'
import { pageLayout } from '../styles/shared.css'

type MapPageProps = {
  userLocation: MapLocation | null
}

const Map = ({ userLocation }: MapPageProps) => {
  return (
    <section className={pageLayout}>
      <MapCard userLocation={userLocation} />
    </section>
  )
}

export default Map
