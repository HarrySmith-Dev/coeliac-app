import { Route, Routes } from 'react-router-dom'
import BottomNavigation from '@/components/navigation/bottomNavigation/BottomNavigation'
import TopNavigation from '@/components/navigation/topNavigation/TopNavigation'
import { useScrollOnNavigate } from '@/hooks/useScrollOnNavigate'
import About from '@/pages/about/About'
import DevErrorTest from '@/pages/devErrorTest/DevErrorTest'
import Home from '@/pages/home/Home'
import MapPage from '@/pages/map/MapPage'
import NotFound from '@/pages/notFound/NotFound'

function App() {
  useScrollOnNavigate()

  return (
    <>
      <TopNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<MapPage />} />
          {import.meta.env.DEV && <Route path="/dev/error" element={<DevErrorTest />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <BottomNavigation />
    </>
  )
}

export default App
