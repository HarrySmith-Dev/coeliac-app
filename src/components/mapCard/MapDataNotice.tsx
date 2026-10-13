import { smallMutedText } from '@/styles/shared.css'
import { mapDataNotice } from './MapCard.css'

const MapDataNotice = () => {
  return (
    <p className={`${smallMutedText} ${mapDataNotice}`}>
      Places come from community-edited OpenStreetMap data and may be out of date. Always check with
      staff before ordering.
    </p>
  )
}

export default MapDataNotice
