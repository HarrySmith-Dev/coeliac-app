import FaqAccordion from '../../components/faqAccordion/FaqAccordion'
import InfoCard from '../../components/infoCard/InfoCard'
import MapCard from '../../components/mapCard/MapCard'
import NearMeButton from '../../components/nearMeButton/NearMeButton'
import OverviewStats from '../../components/statPill/OverviewStats'
import { faqs, homeOverviewDescription, homeOverviewStats } from '../../data/coeliacContent'
import { pageLayout, rowContainer } from '../../styles/shared.css'
import { homeDivider } from './Home.css'

const Home = () => {
  return (
    <section id="home" className={pageLayout}>
      <div className={rowContainer}>
        <InfoCard description={homeOverviewDescription}>
          <OverviewStats stats={homeOverviewStats} />
          <NearMeButton desktop />
        </InfoCard>
        <NearMeButton />
        <MapCard />
      </div>

      <hr className={homeDivider} />
      <h2>Faq</h2>

      {faqs.map((faq) => (
        <FaqAccordion key={faq.id} title={faq.title} description={faq.description} />
      ))}
    </section>
  )
}

export default Home
