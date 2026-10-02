import { style } from '@vanilla-extract/css'
import { bodyText, headingText } from '@/styles/shared.css'
import { colors } from '@/styles/tokens'

export const notFoundHeading = style([
  headingText,
  {
    color: colors.text,
    margin: '0 0 15px',
  },
])

export const notFoundText = style([
  bodyText,
  {
    margin: '0 0 20px',
  },
])

export const notFoundLink = style([
  bodyText,
  {
    color: colors.primary,
    fontWeight: 600,
  },
])
