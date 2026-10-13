import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from '@/styles/global.css'
import { actionLink } from '@/styles/shared.css'
import { colors, fonts } from '@/styles/tokens'

export const footer = style({
  borderTop: `1px solid ${colors.border}`,
  color: colors.textMuted,
  fontFamily: fonts.body,
  fontSize: '14px',
  padding: '24px 20px calc(100px + env(safe-area-inset-bottom))',

  '@media': {
    [tabletBreakpoint]: {
      padding: '24px 40px 40px',
    },
    [desktopBreakpoint]: {
      padding: '24px 80px 40px',
    },
  },
})

export const footerLinks = style({
  display: 'flex',
  gap: '24px',
  listStyle: 'none',
  margin: '0 0 12px',
  padding: 0,
})

export const footerLink = style([
  actionLink,
  {
    fontSize: '14px',
  },
])

export const footerDisclaimer = style({
  margin: 0,
})
