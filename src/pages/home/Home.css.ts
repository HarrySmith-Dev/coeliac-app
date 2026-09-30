import { style } from '@vanilla-extract/css'
import { colors } from '../../styles/tokens'

export const homeDivider = style({
  border: `1px solid ${colors.divider}`,
  margin: '100px 0',
})
