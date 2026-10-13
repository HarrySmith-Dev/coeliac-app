import { style } from '@vanilla-extract/css'
import { bodyText, primaryButton } from '@/styles/shared.css'

export const errorBoundaryText = style([
  bodyText,
  {
    margin: '0 0 20px',
  },
])

export const errorBoundaryButton = style([
  primaryButton,
  {
    alignSelf: 'flex-start',
  },
])
