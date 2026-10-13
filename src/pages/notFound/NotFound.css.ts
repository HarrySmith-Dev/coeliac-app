import { style } from '@vanilla-extract/css'
import { actionLink, bodyText } from '@/styles/shared.css'

export const notFoundText = style([
  bodyText,
  {
    margin: '0 0 20px',
  },
])

export const notFoundLink = style([bodyText, actionLink])
