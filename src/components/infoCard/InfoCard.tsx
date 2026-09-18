import { cardContainer, cardContent } from '../../styles/shared.css'
import type { MapLocation } from '../mapCard/MapCard'
import NearMeButton from '../nearMeButton/NearMeButton'
import StatPill from '../statPill/StatPill'
import {
  infoCardContainer,
  infoCardHeader,
  infoCardStatPillContainer,
  infoCardText,
} from './InfoCard.css'

type InfoCardProps = {
  userLocation: MapLocation | null
  onLocationFound: (location: [number, number]) => void
}

const InfoCard = ({ onLocationFound }: InfoCardProps) => {
  return (
    <article className={`${cardContainer} ${infoCardContainer}`}>
      <div className={cardContent}>
        <h2 className={infoCardHeader}>Did you know?</h2>
        <p className={infoCardText}>
          Coeeliac disease is an autoimmune condition, not an allergy or a lifestyle choice.
        </p>
      </div>
      <div className={infoCardStatPillContainer}>
        <StatPill
          title="1 in 100"
          value="people are affected"
          backgroundColor="#EAF3DE"
          headerColor="#173404"
          textColor="#3B6D11"
        />
        <StatPill
          title="500,000"
          value="people undiagnosed in the UK"
          backgroundColor="#FAEEDA"
          headerColor="#412402"
          textColor="#854F0B"
        />
      </div>
      <NearMeButton onLocationFound={onLocationFound} desktop />
      <p className={infoCardText}>
        Find gluten-free spots near you by clicking the button above. Your location will be used to
        show you nearby spots that are suitable for people with coeliac disease.
      </p>
    </article>
  )
}

export default InfoCard
