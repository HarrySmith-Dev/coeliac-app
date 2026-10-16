import { describe, expect, it } from 'vitest'
import { OverpassError } from '@/api/overpass'
import { getMapStatus } from './mapStatus'

const idle = {
  locationError: null,
  hasSearchCentre: true,
  isFetching: false,
  failureCount: 0,
  isSlowSearch: false,
  error: null,
  placeCount: 3,
}

describe('getMapStatus', () => {
  it('shows a location error before anything else', () => {
    expect(
      getMapStatus({ ...idle, locationError: 'Location access was denied.', isFetching: true }),
    ).toEqual({ message: 'Location access was denied.', canRetry: false })
  })

  it('asks for a location or search area when there is no search centre', () => {
    expect(getMapStatus({ ...idle, hasSearchCentre: false }).message).toBe(
      'Share your location or search an area of the map',
    )
  })

  it('says it is searching while fetching', () => {
    expect(getMapStatus({ ...idle, isFetching: true }).message).toBe(
      'Searching for gluten-free spots...',
    )
  })

  it('says the search is slow after the slow search delay', () => {
    expect(getMapStatus({ ...idle, isFetching: true, isSlowSearch: true }).message).toMatch(
      /^Still searching/,
    )
  })

  it('says it is trying again while retrying, even if the search is slow', () => {
    expect(
      getMapStatus({ ...idle, isFetching: true, failureCount: 1, isSlowSearch: true }).message,
    ).toBe('The place search service is busy, trying again...')
  })

  it('says the service is unavailable without a retry button when blocked', () => {
    expect(
      getMapStatus({ ...idle, error: new OverpassError('failed', 403), placeCount: undefined }),
    ).toEqual({
      message: 'The place search service is unavailable right now. Please try again later.',
      canRetry: false,
    })
  })

  it.each([429, 502, 503, 504])(
    'says the service is busy with a retry button for status %i',
    (status) => {
      expect(
        getMapStatus({
          ...idle,
          error: new OverpassError('failed', status),
          placeCount: undefined,
        }),
      ).toEqual({
        message: 'The place search service is busy right now. Please try again in a minute.',
        canRetry: true,
      })
    },
  )

  it('shows a general error with a retry button for other errors', () => {
    expect(
      getMapStatus({ ...idle, error: new TypeError('Failed to fetch'), placeCount: undefined }),
    ).toEqual({ message: "Couldn't load gluten-free spots.", canRetry: true })
  })

  it('shows the error rather than old results when a new search fails', () => {
    expect(getMapStatus({ ...idle, error: new OverpassError('failed', 500) }).message).toBe(
      "Couldn't load gluten-free spots.",
    )
  })

  it('says no places were found when the search is empty', () => {
    expect(getMapStatus({ ...idle, placeCount: 0 }).message).toBe(
      'No gluten-free spots found within 1 km',
    )
  })

  it('counts the places found', () => {
    expect(getMapStatus({ ...idle, placeCount: 1 }).message).toBe('1 gluten-free spot within 1 km')
    expect(getMapStatus(idle)).toEqual({
      message: '3 gluten-free spots within 1 km',
      canRetry: false,
    })
  })

  it('says it is searching rather than showing a count when there are no results yet', () => {
    expect(getMapStatus({ ...idle, placeCount: undefined }).message).toBe(
      'Searching for gluten-free spots...',
    )
  })
})
