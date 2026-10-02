import { Link } from 'react-router-dom'
import type { Faq } from '../../types/content'
import FaqAccordion from '../faqAccordion/FaqAccordion'
import { faqSection, faqSectionHeading, faqSectionLink } from './FaqSection.css'

type FaqSectionProps = {
  faqs: Faq[]
  id?: string
  showAllLink?: boolean
}

const FaqSection = ({ faqs, id, showAllLink = false }: FaqSectionProps) => {
  return (
    <section id={id} className={faqSection}>
      <h2 className={faqSectionHeading}>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <FaqAccordion
          key={faq.id}
          title={faq.title}
          description={faq.description}
          sources={faq.sources}
        />
      ))}
      {showAllLink && (
        <Link to="/about#faq" className={faqSectionLink}>
          See all questions
        </Link>
      )}
    </section>
  )
}

export default FaqSection
