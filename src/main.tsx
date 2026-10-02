import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary'
import LocationProvider from './context/LocationProvider'
import { persistOptions, queryClient } from './lib/queryClient'
import './styles/global.css.ts'
import 'leaflet/dist/leaflet.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
      <BrowserRouter>
        <LocationProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </LocationProvider>
      </BrowserRouter>
    </PersistQueryClientProvider>
  </StrictMode>,
)
