import { describe, expect, it } from 'vitest'
import { toSafeUrl } from './url'

describe('toSafeUrl', () => {
  it('keeps http and https URLs', () => {
    expect(toSafeUrl('https://example.com/menu')).toBe('https://example.com/menu')
    expect(toSafeUrl('http://example.com')).toBe('http://example.com/')
  })

  it('adds https to URLs without a scheme', () => {
    expect(toSafeUrl('example.com')).toBe('https://example.com/')
    expect(toSafeUrl('www.example.co.uk/gluten-free')).toBe('https://www.example.co.uk/gluten-free')
  })

  it('uses the first of several semicolon-separated URLs', () => {
    expect(toSafeUrl('https://one.example; https://two.example')).toBe('https://one.example/')
  })

  it('trims surrounding whitespace', () => {
    expect(toSafeUrl('  https://example.com  ')).toBe('https://example.com/')
  })

  it.each(['javascript:alert(1)', 'JavaScript:alert(1)', 'data:text/html,hi', 'ftp://example.com'])(
    'rejects the unsafe scheme in %s',
    (value) => {
      expect(toSafeUrl(value)).toBeUndefined()
    },
  )

  it.each([undefined, '', '   ', ';', 'https://exa mple.com'])(
    'returns undefined for the missing or invalid value %j',
    (value) => {
      expect(toSafeUrl(value)).toBeUndefined()
    },
  )
})
