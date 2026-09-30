import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../styles/global.css'
import { colors, fonts } from '../../styles/tokens'

export const mapCardLink = style({
  color: colors.primary,
  textDecoration: 'none',
  fontFamily: fonts.body,
  fontSize: '14px',
})

export const mapCardContainer = style({
  minWidth: 0,
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,

  '@media': {
    [desktopBreakpoint]: {
      flex: 1,
    },
  },
})

export const mapCardMap = style({
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  overflow: 'hidden',
})
