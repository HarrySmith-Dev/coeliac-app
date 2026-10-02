import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from './global.css'
import { colors, fonts } from './tokens'

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px 100px',

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
  fontWeight: 'bold',

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
