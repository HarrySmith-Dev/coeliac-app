import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from '../../styles/global.css'

export const faqAccordionContainer = style({
  cursor: 'pointer',
  border: '1px solid #CFCBB8',
  backgroundColor: '#FFFFFF',
  margin: '20px 0 0',
  borderRadius: '15px',
  padding: '20px',

  ':first-child': {
    margin: '50px 0 0',
  },
})

export const faqAccordionHeader = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
})

export const faqAccordionCardHeading = style({
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
  color: '#2C2C2A',
  fontFamily: "'Fraunces', serif",

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '20px',
    },
    [desktopBreakpoint]: {
      fontSize: '24px',
    },
  },
})

export const faqAccordionChevron = style({
  height: '20px',
  width: '20px',
})

export const faqAccordionChevronClosed = style([
  faqAccordionChevron,
  {
    transform: 'rotate(90deg)',
  },
])

export const faqAccordionContent = style({
  cursor: 'default',
})

export const faqAccordionCardText = style({
  fontSize: '16px',
  margin: '15px 0',
  color: '#5F5E5A',
  fontFamily: "'Inter', sans-serif",

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '18px',
    },
    [desktopBreakpoint]: {
      fontSize: '22px',
    },
  },
})
