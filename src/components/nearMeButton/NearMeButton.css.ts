import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../styles/global.css'
import { colors, fonts } from '../../styles/tokens'

export const nearMeButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  backgroundColor: colors.accent,
  border: 'none',
  borderRadius: '15px',
  color: colors.surface,
  fontSize: '18px',
  fontFamily: fonts.heading,
  cursor: 'pointer',
  gap: '10px',

  ':hover': {
    backgroundColor: colors.accentHover,
  },

  '@media': {
    [desktopBreakpoint]: {
      display: 'none',
    },
  },
})

export const nearMeButtonIcon = style({
  width: '20px',
  height: '20px',
  filter: 'brightness(0) invert(1)',
})

export const nearMeButtonDesktop = style({
  display: 'none',

  '@media': {
    [desktopBreakpoint]: {
      display: 'flex',
      margin: '0 0 15px',
    },
  },
})
