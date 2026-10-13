import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '@/components/footer/Footer'
import BottomNavigation from '@/components/navigation/bottomNavigation/BottomNavigation'
import TopNavigation from '@/components/navigation/topNavigation/TopNavigation'
import { useScrollOnNavigate } from '@/hooks/useScrollOnNavigate'
import { appMain, skipLink } from '@/styles/shared.css'
import About from '@/pages/about/About'
import DevErrorTest from '@/pages/devErrorTest/DevErrorTest'
import Home from '@/pages/home/Home'
import MapPage from '@/pages/map/MapPage'
import NotFound from '@/pages/notFound/NotFound'
import Privacy from '@/pages/privacy/Privacy'
import Sources from '@/pages/sources/Sources'

function App() {
  useScrollOnNavigate()
  const mainRef = useRef<HTMLElement>(null)

  return (
    <>
      <a
        href="#main-content"
        className={skipLink}
        onClick={(event) => {
          event.preventDefault()
          mainRef.current?.focus()
        }}
      >
        Skip to content
      </a>
      <TopNavigation />
      <main id="main-content" ref={mainRef} tabIndex={-1} className={appMain}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/privacy" element={<Privacy />} />
          {import.meta.env.DEV && <Route path="/dev/error" element={<DevErrorTest />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BottomNavigation />
    </>
  )
}

export default App
