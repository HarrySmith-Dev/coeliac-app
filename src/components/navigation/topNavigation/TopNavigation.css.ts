import { style } from '@vanilla-extract/css'

export const topNavigationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#0F6E56',
  padding: '20px',
})

export const topNavigationTitle = style({
  color: '#FFFFFF',
  fontFamily: "'Fraunces', serif",
  fontSize: '20px',
  fontWeight: '500',
  margin: '0 0 10px',
})

export const topNavigationSubtitle = style({
  color: '#E1F5EE',
  fontSize: '16px',
  margin: '0',
  fontFamily: "'Inter', sans-serif",
})
