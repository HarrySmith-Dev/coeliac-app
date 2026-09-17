import BottomNavigation from './components/navigation/bottomNavigation/BottomNavigation'
import TopNavigation from './components/navigation/topNavigation/TopNavigation'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Map from './pages/Map'

function App() {
  return (
    <>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <BottomNavigation />
    </>
  )
}

export default App
