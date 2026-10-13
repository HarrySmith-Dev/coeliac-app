import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from './global.css'
import { colors, fonts } from './tokens'

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px 40px',

  '@media': {
    [tabletBreakpoint]: {
      padding: '40px 40px 60px',
    },

    [desktopBreakpoint]: {
      padding: '40px 80px 60px',
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

export const pageHeading = style({
  color: colors.text,
  fontFamily: fonts.heading,
  fontSize: '24px',
  fontWeight: 600,
  margin: '0 0 20px',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '28px',
    },
    [desktopBreakpoint]: {
      fontSize: '32px',
    },
  },
})

export const sectionHeading = style({
  color: colors.text,
  fontFamily: fonts.heading,
  fontSize: '22px',
  fontWeight: 600,
  margin: '0 0 15px',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '24px',
    },
    [desktopBreakpoint]: {
      fontSize: '28px',
    },
  },
})

export const sectionText = style([
  bodyText,
  {
    color: colors.textMuted,
    margin: '0 0 15px',

    '@media': {
      [desktopBreakpoint]: {
        fontSize: '20px',
      },
    },
  },
])

export const appMain = style({
  flexGrow: 1,

  ':focus': {
    outline: 'none',
  },
})

export const inlineLink = style({
  color: colors.primary,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
})

export const actionLink = style({
  background: 'none',
  border: 'none',
  color: colors.primary,
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: fonts.body,
  fontWeight: 600,
  lineHeight: '24px',
  padding: 0,
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
})

export const primaryButton = style({
  alignItems: 'center',
  backgroundColor: colors.accentStrong,
  border: 'none',
  borderRadius: '15px',
  color: colors.surface,
  cursor: 'pointer',
  display: 'flex',
  fontFamily: fonts.heading,
  fontSize: '18px',
  gap: '10px',
  justifyContent: 'center',
  padding: '15px 20px',

  ':hover': {
    backgroundColor: colors.accentStrongHover,
  },
})

export const skipLink = style({
  backgroundColor: colors.surface,
  borderRadius: '8px',
  color: colors.primary,
  fontFamily: fonts.body,
  fontWeight: 600,
  left: '10px',
  padding: '10px 16px',
  position: 'absolute',
  top: '-100px',
  zIndex: 2000,

  ':focus': {
    top: '10px',
  },
})
