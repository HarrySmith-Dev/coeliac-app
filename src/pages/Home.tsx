import InfoCard from '../components/infoCard/InfoCard'
import MapCard, { type MapLocation } from '../components/mapCard/MapCard'
import NearMeButton, { type LocationCoordinates } from '../components/nearMeButton/NearMeButton'
import StatPill from '../components/statPill/StatPill'
import { cardStatPillContainer } from '../styles/shared.css'
import { pageLayout } from '../styles/shared.css'

type HomeProps = {
  userLocation: MapLocation | null
  onLocationFound: (location: LocationCoordinates) => void
}

const Home = ({ userLocation, onLocationFound }: HomeProps) => {
  return (
    <section id="home" className={pageLayout} style={{ gap: '20px' }}>
      <InfoCard
        title="Did you know?"
        backgroundColor="#FFFFFF"
        border="1px solid #CFCBB8"
        description="Coeliac disease is an autoimmune condition, not an allergy or a lifestyle choice."
        statsPills={
          <div className={cardStatPillContainer}>
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
        }
        nearMeButton={<NearMeButton onLocationFound={onLocationFound} desktop />}
      />
      <NearMeButton onLocationFound={onLocationFound} />
      <MapCard userLocation={userLocation} />
    </section>
  )
}

export default Home
