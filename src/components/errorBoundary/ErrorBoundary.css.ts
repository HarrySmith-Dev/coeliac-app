import { style } from '@vanilla-extract/css'
import { bodyText, headingText } from '@/styles/shared.css'
import { colors, fonts } from '@/styles/tokens'

export const errorBoundaryHeading = style([
  headingText,
  {
    color: colors.text,
    margin: '0 0 15px',
  },
])

export const errorBoundaryText = style([
  bodyText,
  {
    margin: '0 0 20px',
  },
])

export const errorBoundaryButton = style({
  backgroundColor: colors.primary,
  border: 'none',
  borderRadius: '15px',
  color: colors.surface,
  cursor: 'pointer',
  fontFamily: fonts.body,
  fontSize: '16px',
  fontWeight: 600,
  padding: '12px 20px',
})
