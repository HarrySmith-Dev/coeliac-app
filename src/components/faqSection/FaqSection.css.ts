import { style } from '@vanilla-extract/css'
import { actionLink } from '@/styles/shared.css'

export const faqSection = style({
  scrollMarginTop: '20px',
})

export const faqSectionLink = style([
  actionLink,
  {
    fontSize: '16px',
    margin: '20px 0 0',
  },
])
