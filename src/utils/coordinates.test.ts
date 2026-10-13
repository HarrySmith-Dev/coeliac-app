import { describe, expect, it } from 'vitest'
import { roundCoordinates } from './coordinates'

describe('roundCoordinates', () => {
  it('rounds to three decimal places', () => {
    expect(roundCoordinates([51.50735, -0.12776])).toEqual([51.507, -0.128])
  })

  it('gives nearby points the same result so they share a cache entry', () => {
    expect(roundCoordinates([51.5071, -0.1271])).toEqual(roundCoordinates([51.5074, -0.1274]))
  })

  it('leaves already-rounded coordinates unchanged', () => {
    expect(roundCoordinates([51.505, -0.09])).toEqual([51.505, -0.09])
  })
})
