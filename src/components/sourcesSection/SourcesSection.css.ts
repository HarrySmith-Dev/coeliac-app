import { style } from '@vanilla-extract/css'
import { bodyText, headingText } from '@/styles/shared.css'
import { colors, fonts } from '@/styles/tokens'

export const sourcesSectionHeading = style([
  headingText,
  {
    color: colors.text,
    margin: '0 0 15px',
  },
])

export const sourcesSectionText = style([
  bodyText,
  {
    color: colors.textMuted,
    margin: '0 0 15px',
  },
])

export const sourcesSectionList = style({
  fontFamily: fonts.body,
  fontSize: '16px',
  margin: '0 0 15px',
  padding: '0 0 0 20px',
})

export const sourcesSectionItem = style({
  margin: '0 0 8px',
})

export const sourcesSectionLink = style({
  color: colors.primary,
})

export const sourcesSectionReviewed = style({
  color: colors.textMuted,
  fontFamily: fonts.body,
  fontSize: '14px',
  margin: 0,
})
