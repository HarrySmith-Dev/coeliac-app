import FaqAccordion from '../components/faqAccordion/FaqAccordion'
import InfoCard from '../components/infoCard/InfoCard'
import OverviewStats from '../components/statPill/OverviewStats'
import {
  aboutOverviewDescription,
  aboutOverviewStats,
  faqs,
  symptoms,
} from '../data/coeliacContent'
import { pageLayout, rowContainer } from '../styles/shared.css'

const About = () => {
  return (
    <section className={pageLayout}>
      <div className={rowContainer}>
        <InfoCard variant="plain" description={aboutOverviewDescription}>
          <OverviewStats stats={aboutOverviewStats} />
        </InfoCard>
        <InfoCard title="Common Symptoms" listItems={symptoms} />
      </div>
      {faqs.map((faq) => (
        <FaqAccordion key={faq.id} title={faq.title} description={faq.description} />
      ))}
    </section>
  )
}

export default About
