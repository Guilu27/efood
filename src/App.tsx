import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'
import SiteRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />

      <Header />
      <div className="container">
        <SiteRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
