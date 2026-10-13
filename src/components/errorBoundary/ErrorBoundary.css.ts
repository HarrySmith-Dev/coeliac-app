import { style } from '@vanilla-extract/css'
import { primaryButton } from '@/styles/shared.css'

export const errorBoundaryButton = style([
  primaryButton,
  {
    alignSelf: 'flex-start',
  },
])
