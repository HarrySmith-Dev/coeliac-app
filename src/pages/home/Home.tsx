import FaqSection from '../../components/faqSection/FaqSection'
import InfoCard from '../../components/infoCard/InfoCard'
import MapCard from '../../components/mapCard/MapCard'
import NearMeButton from '../../components/nearMeButton/NearMeButton'
import OverviewStats from '../../components/overviewStats/OverviewStats'
import { featuredFaqs, homeOverviewDescription, homeOverviewStats } from '../../data/coeliacContent'
import { pageLayout, rowContainer, sectionDivider } from '../../styles/shared.css'

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

      <hr className={sectionDivider} />
      <FaqSection faqs={featuredFaqs} showAllLink />
    </section>
  )
}

export default Home
