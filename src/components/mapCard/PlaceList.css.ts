import { style } from '@vanilla-extract/css'
import { colors, fonts } from '@/styles/tokens'

export const placeList = style({
  backgroundColor: colors.surface,
  borderRadius: '10px',
  inset: 0,
  listStyle: 'none',
  margin: 0,
  overflowY: 'auto',
  padding: '0 16px',
  position: 'absolute',
  zIndex: 1000,
})

export const placeListItem = style({
  borderBottom: `1px solid ${colors.border}`,
  fontFamily: fonts.body,
  padding: '12px 0',
})

export const placeListName = style({
  color: colors.text,
  fontFamily: fonts.heading,
  fontSize: '17px',
  fontWeight: 600,
  margin: '0 0 4px',
})

export const placeListLevel = style({
  alignItems: 'center',
  color: colors.primary,
  display: 'flex',
  fontSize: '14px',
  fontWeight: 600,
  gap: '6px',
  margin: '0 0 4px',
})

export const placeListDot = style({
  borderRadius: '50%',
  display: 'inline-block',
  height: '10px',
  width: '10px',
})

export const placeListDetail = style({
  color: colors.textMuted,
  fontSize: '14px',
  margin: '0 0 8px',
})

export const placeListLinks = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
})

export const placeListShowButton = style({
  background: 'none',
  border: 'none',
  color: colors.primary,
  cursor: 'pointer',
  fontFamily: fonts.body,
  fontSize: '14px',
  padding: 0,
  textDecoration: 'underline',
})
