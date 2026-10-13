import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '@/styles/global.css'
import { colors, fonts } from '@/styles/tokens'

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

export const mapCardMapPlaceholder = style({
  backgroundColor: colors.divider,
})

export const mapCardMapFullPage = style([
  mapCardMap,
  {
    height: '70vh',
    minHeight: '400px',
  },
])

export const mapCardActions = style({
  display: 'flex',
  flexShrink: 0,
  gap: '16px',
})

export const mapCardMapArea = style({
  position: 'relative',
})

export const mapCardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '10px',
  margin: '0 0 10px',
})

export const mapDataNotice = style({
  marginTop: '10px',
})

export const mapCardRetry = style({
  background: 'none',
  border: 'none',
  color: colors.primary,
  cursor: 'pointer',
  font: 'inherit',
  padding: 0,
  textDecoration: 'underline',
})

export const placePopupName = style({
  fontFamily: fonts.heading,
  fontSize: '16px',
  fontWeight: 600,
  margin: '0 0 4px',
})

export const placePopupLevel = style({
  color: colors.primary,
  fontWeight: 600,
  margin: '0 0 4px',
})

export const placePopupDetail = style({
  color: colors.textMuted,
  margin: '0 0 4px',
})

export const searchAreaControl = style({
  position: 'absolute',
  top: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
})

export const searchAreaButton = style({
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: '999px',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  color: colors.text,
  cursor: 'pointer',
  fontFamily: fonts.body,
  fontSize: '14px',
  fontWeight: 600,
  margin: 0,
  padding: '8px 16px',
  whiteSpace: 'nowrap',

  ':hover': {
    backgroundColor: colors.pageBackground,
  },
})

export const searchAreaHint = style([
  searchAreaButton,
  {
    color: colors.textMuted,
    cursor: 'default',

    ':hover': {
      backgroundColor: colors.surface,
    },
  },
])
