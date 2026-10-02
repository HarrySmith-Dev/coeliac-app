import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from './global.css'
import { colors, fonts } from './tokens'

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px calc(100px + env(safe-area-inset-bottom))',

  '@media': {
    [tabletBreakpoint]: {
      padding: '40px 40px 100px',
    },

    [desktopBreakpoint]: {
      padding: '40px 80px 100px',
    },
  },
})

export const rowContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@media': {
    [desktopBreakpoint]: {
      flexDirection: 'row',
    },
  },
})

export const cardContainer = style({
  borderRadius: '15px',
  padding: '30px',
})

export const headingText = style({
  fontFamily: fonts.heading,
  fontSize: '18px',
  fontWeight: 600,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '20px',
    },
    [desktopBreakpoint]: {
      fontSize: '24px',
    },
  },
})

export const bodyText = style({
  color: colors.text,
  fontFamily: fonts.body,
  fontSize: '16px',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '18px',
    },
    [desktopBreakpoint]: {
      fontSize: '22px',
    },
  },
})

export const sectionDivider = style({
  border: `1px solid ${colors.divider}`,
  margin: '100px 0',
})

export const visuallyHidden = style({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
})
