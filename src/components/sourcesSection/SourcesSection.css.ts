import { style } from '@vanilla-extract/css'
import { fonts } from '@/styles/tokens'

export const sourcesSectionList = style({
  fontFamily: fonts.body,
  fontSize: '16px',
  margin: '0 0 15px',
  padding: '0 0 0 20px',
})

export const sourcesSectionItem = style({
  margin: '0 0 8px',
})
