import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Shop from './pages/Shop.jsx'
import Fashion from './pages/Fashion.jsx'
import Skincare from './pages/Skincare.jsx'
import Airbrush from './pages/Airbrush.jsx'
import Academy from './pages/Academy.jsx'
import MakeupOnDemand from './pages/MakeupOnDemand.jsx'
import Ambassador from './pages/Ambassador.jsx'

// Scroll to top on route change, or to a hash anchor if present.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/airbrush" element={<Airbrush />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/makeup-on-demand" element={<MakeupOnDemand />} />
        <Route path="/become-an-ambassador" element={<Ambassador />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
