import { describe, expect, it } from 'vitest'
import { OverpassError } from '@/api/overpass'
import { isRetryable } from './useGlutenFreePlaces'

describe('isRetryable', () => {
  it.each([429, 500, 503, 504])('retries Overpass errors with status %i', (status) => {
    expect(isRetryable(new OverpassError('failed', status))).toBe(true)
  })

  it.each([400, 403, 404])('does not retry Overpass errors with status %i', (status) => {
    expect(isRetryable(new OverpassError('failed', status))).toBe(false)
  })

  it('retries Overpass errors without a status, such as timeouts and remarks', () => {
    expect(isRetryable(new OverpassError('Overpass request timed out'))).toBe(true)
  })

  it('retries other errors, such as network failures', () => {
    expect(isRetryable(new TypeError('Failed to fetch'))).toBe(true)
  })
})
