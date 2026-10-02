import { style } from '@vanilla-extract/css'
import { headingText } from '@/styles/shared.css'
import { colors, fonts } from '@/styles/tokens'

export const faqSection = style({
  scrollMarginTop: '20px',
})

export const faqSectionHeading = style([
  headingText,
  {
    color: colors.text,
    margin: 0,
  },
])

export const faqSectionLink = style({
  color: colors.primary,
  display: 'inline-block',
  fontFamily: fonts.body,
  fontSize: '16px',
  fontWeight: 600,
  margin: '20px 0 0',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
})
