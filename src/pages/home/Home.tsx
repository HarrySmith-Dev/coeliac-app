import FaqSection from '@/components/faqSection/FaqSection'
import InfoCard from '@/components/infoCard/InfoCard'
import MapCard from '@/components/mapCard/MapCard'
import NearMeButton from '@/components/nearMeButton/NearMeButton'
import OverviewStats from '@/components/overviewStats/OverviewStats'
import { featuredFaqs, homeOverviewDescription, homeOverviewStats } from '@/data/coeliacContent'
import { pageLayout, rowContainer, sectionDivider, visuallyHidden } from '@/styles/shared.css'
import { usePageTitle } from '@/hooks/usePageTitle'

const Home = () => {
  usePageTitle()

  return (
    <section id="home" className={pageLayout}>
      <h1 className={visuallyHidden}>Find gluten-free food near you</h1>
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
