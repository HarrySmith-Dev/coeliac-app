import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { defaultShouldDehydrateQuery, QueryClient } from '@tanstack/react-query'
import type { PersistQueryClientProviderProps } from '@tanstack/react-query-persist-client'
import { PLACES_CACHE_TIME, PLACES_QUERY_KEY } from './places/useGlutenFreePlaces'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

const getLocalStorage = () => {
  try {
    return window.localStorage
  } catch {
    return null
  }
}

export const persistOptions: PersistQueryClientProviderProps['persistOptions'] = {
  persister: createAsyncStoragePersister({
    storage: getLocalStorage(),
    key: 'coeliac-app:query-cache',
  }),
  maxAge: PLACES_CACHE_TIME,
  buster: 'places-v1',
  dehydrateOptions: {
    shouldDehydrateQuery: (query) =>
      query.queryKey[0] === PLACES_QUERY_KEY && defaultShouldDehydrateQuery(query),
  },
}
