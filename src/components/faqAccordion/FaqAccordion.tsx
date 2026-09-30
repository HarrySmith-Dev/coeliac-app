import { useId, useState } from 'react'
import chevron from '../../assets/chevron.svg'
import {
  faqAccordionChevronClosed,
  faqAccordionContainer,
  faqAccordionChevron,
  faqAccordionContent,
  faqAccordionCardText,
  faqAccordionHeader,
  faqAccordionCardHeading,
} from './FaqAccordion.css'

type FaqAccordionProps = {
  title: string
  description?: string
  listItems?: string[]
}

const FaqAccordion = ({ title, description, listItems }: FaqAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  const toggleAccordion = () => setIsOpen((isOpen) => !isOpen)

  return (
    <div className={faqAccordionContainer}>
      <h2 className={faqAccordionCardHeading}>
        <button
          type="button"
          className={faqAccordionHeader}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={toggleAccordion}
        >
          {title}
          <img
            className={isOpen ? faqAccordionChevron : faqAccordionChevronClosed}
            src={chevron}
            alt=""
            aria-hidden="true"
          />
        </button>
      </h2>
      <div id={contentId} className={faqAccordionContent} hidden={!isOpen}>
        {description && <p className={faqAccordionCardText}>{description}</p>}
        {listItems && (
          <ul>
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default FaqAccordion
