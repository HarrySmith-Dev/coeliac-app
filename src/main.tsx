import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary'
import LocationProvider from './context/LocationProvider'
import { persistOptions, queryClient } from './lib/queryClient'
import '@fontsource/fraunces/latin-400.css'
import '@fontsource/fraunces/latin-500.css'
import '@fontsource/fraunces/latin-600.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import './styles/global.css.ts'

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
      <Analytics />
    </PersistQueryClientProvider>
  </StrictMode>,
)
