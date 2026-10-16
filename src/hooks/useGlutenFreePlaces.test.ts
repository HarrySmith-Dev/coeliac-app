import { describe, expect, it } from 'vitest'
import { OverpassError } from '@/api/overpass'
import { getRetryDelay, isBlocked, isBusy, isRetryable } from './useGlutenFreePlaces'

describe('isRetryable', () => {
  it.each([429, 500, 503, 504])('retries Overpass errors with status %i', (status) => {
    expect(isRetryable(new OverpassError('failed', status))).toBe(true)
  })

  it.each([400, 403, 404, 406])('does not retry Overpass errors with status %i', (status) => {
    expect(isRetryable(new OverpassError('failed', status))).toBe(false)
  })

  it('retries Overpass errors without a status, such as timeouts and remarks', () => {
    expect(isRetryable(new OverpassError('Overpass request timed out'))).toBe(true)
  })

  it('retries other errors, such as network failures', () => {
    expect(isRetryable(new TypeError('Failed to fetch'))).toBe(true)
  })
})

describe('isBlocked', () => {
  it.each([403, 406])('treats Overpass errors with status %i as blocked', (status) => {
    expect(isBlocked(new OverpassError('failed', status))).toBe(true)
  })

  it.each([400, 429, 504])('does not treat Overpass errors with status %i as blocked', (status) => {
    expect(isBlocked(new OverpassError('failed', status))).toBe(false)
  })

  it('does not treat other errors or no error as blocked', () => {
    expect(isBlocked(new TypeError('Failed to fetch'))).toBe(false)
    expect(isBlocked(null)).toBe(false)
  })
})

describe('isBusy', () => {
  it.each([429, 502, 503, 504])('treats Overpass errors with status %i as busy', (status) => {
    expect(isBusy(new OverpassError('failed', status))).toBe(true)
  })

  it.each([400, 403, 500])('does not treat Overpass errors with status %i as busy', (status) => {
    expect(isBusy(new OverpassError('failed', status))).toBe(false)
  })

  it('does not treat other errors or no error as busy', () => {
    expect(isBusy(new OverpassError('Overpass request timed out'))).toBe(false)
    expect(isBusy(new TypeError('Failed to fetch'))).toBe(false)
    expect(isBusy(null)).toBe(false)
  })
})

describe('getRetryDelay', () => {
  it('waits 5 seconds and then 15 seconds between retries', () => {
    expect(getRetryDelay(0)).toBe(5000)
    expect(getRetryDelay(1)).toBe(15000)
  })
})
