import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantPage from './pages/RestaurantPage'

const SiteRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<RestaurantPage />} />
  </Routes>
)

export default SiteRoutes
