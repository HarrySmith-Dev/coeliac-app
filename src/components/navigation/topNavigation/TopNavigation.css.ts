import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '@/styles/global.css'
import { colors, fonts } from '@/styles/tokens'

export const topNavigationContainer = style({
  backgroundColor: colors.primary,
  padding: '18px',

  '@media': {
    [desktopBreakpoint]: {
      padding: '30px',
    },
  },
})

export const topNavigationContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media': {
    [desktopBreakpoint]: {
      flexDirection: 'row',
      gap: '150px',
      boxSizing: 'border-box',
    },
  },
})

export const topNavigationTitle = style({
  color: colors.surface,
  fontFamily: fonts.heading,
  fontSize: '20px',
  fontWeight: '500',
  margin: '0 0 10px',

  '@media': {
    [desktopBreakpoint]: {
      fontSize: '24px',
      margin: '0 0 0 60px',
    },
  },
})

export const topNavigationSubtitle = style({
  color: colors.primaryLight,
  fontSize: '16px',
  margin: '0',
  fontFamily: fonts.body,

  '@media': {
    [desktopBreakpoint]: {
      display: 'none',
    },
  },
})

export const topNavigationLinkList = style({
  display: 'none',

  '@media': {
    [desktopBreakpoint]: {
      listStyle: 'none',
      display: 'flex',
      gap: '60px',
      padding: '0',
      margin: '0',
    },
  },
})

export const topNavigationLink = style({
  color: colors.surface,
  textDecoration: 'none',
  fontFamily: fonts.body,
  fontSize: '16px',

  ':hover': {
    color: colors.accent,
  },

  '@media': {
    [desktopBreakpoint]: {
      fontSize: '18px',
    },
  },
})

export const topNavigationItemActive = style({
  color: colors.accent,
})
