import { describe, expect, it, vi } from 'vitest'
import { formatDistance } from './distance'

vi.mock('leaflet', () => ({ latLng: vi.fn() }))

describe('formatDistance', () => {
  it('shows distances under 1 km in metres, rounded to the nearest 10', () => {
    expect(formatDistance(0)).toBe('0 m')
    expect(formatDistance(44)).toBe('40 m')
    expect(formatDistance(45)).toBe('50 m')
    expect(formatDistance(999)).toBe('1000 m')
  })

  it('shows distances of 1 km or more in kilometres to one decimal place', () => {
    expect(formatDistance(1000)).toBe('1.0 km')
    expect(formatDistance(1250)).toBe('1.3 km')
    expect(formatDistance(12345)).toBe('12.3 km')
  })
})
