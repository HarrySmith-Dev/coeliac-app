import { useState } from 'react'
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

  const toggleAccordion = () => setIsOpen((isOpen) => !isOpen)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleAccordion()
    }
  }

  return (
    <div
      className={`${faqAccordionContainer}`}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={toggleAccordion}
      onKeyDown={handleKeyDown}
    >
      <div className={faqAccordionHeader}>
        {title && <h2 className={faqAccordionCardHeading}>{title}</h2>}
        <img
          className={isOpen ? faqAccordionChevron : faqAccordionChevronClosed}
          src={chevron}
          alt="chevron-icon"
          aria-hidden="true"
        />
      </div>
      {isOpen && (
        <div className={faqAccordionContent}>
          {description && <p className={faqAccordionCardText}>{description}</p>}
          {listItems && (
            <ul>
              {listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default FaqAccordion
