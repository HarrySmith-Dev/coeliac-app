import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '@/styles/global.css'
import { bodyText, headingText } from '@/styles/shared.css'
import { colors, fonts } from '@/styles/tokens'

export const faqAccordionContainer = style({
  border: `1px solid ${colors.border}`,
  backgroundColor: colors.surface,
  margin: '20px 0 0',
  borderRadius: '15px',
  padding: '20px',
})

export const faqAccordionHeader = style({
  alignItems: 'center',
  background: 'none',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  font: 'inherit',
  justifyContent: 'space-between',
  padding: 0,
  textAlign: 'left',
  width: '100%',
})

export const faqAccordionCardHeading = style([
  headingText,
  {
    color: colors.text,
    margin: '0',
  },
])

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

export const faqAccordionCardText = style([
  bodyText,
  {
    color: colors.textMuted,
    margin: '15px 0',

    '@media': {
      [desktopBreakpoint]: {
        fontSize: '20px',
      },
    },
  },
])

export const faqAccordionSources = style({
  color: colors.textMuted,
  fontFamily: fonts.body,
  fontSize: '14px',
  margin: '0 0 5px',
})
