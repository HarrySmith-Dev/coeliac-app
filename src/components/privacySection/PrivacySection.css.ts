import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from '@/styles/global.css'
import { inlineLink } from '@/styles/shared.css'
import { colors, fonts } from '@/styles/tokens'

export const privacySectionPointTitle = style({
  color: colors.text,
  fontFamily: fonts.body,
  fontSize: '18px',
  fontWeight: 600,
  margin: '20px 0 5px',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '20px',
    },
    [desktopBreakpoint]: {
      fontSize: '24px',
      margin: '30px 0 8px',
    },
  },
})

export const privacySectionLinks = style({
  color: colors.textMuted,
  fontFamily: fonts.body,
  fontSize: '14px',
  margin: '20px 0 0',
})

export const privacySectionLink = inlineLink
