import { Route, Routes } from 'react-router-dom'
import BottomNavigation from './components/navigation/bottomNavigation/BottomNavigation'
import TopNavigation from './components/navigation/topNavigation/TopNavigation'
import { useScrollToHash } from './hooks/useScrollToHash'
import About from './pages/about/About'
import Home from './pages/home/Home'
import MapPage from './pages/map/MapPage'

function App() {
  useScrollToHash()

  return (
    <>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <BottomNavigation />
    </>
  )
}

export default App
