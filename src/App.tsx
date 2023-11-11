import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import { GlobalCss } from './styles'
import SiteRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <SiteRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
