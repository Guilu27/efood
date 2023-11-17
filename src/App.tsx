import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './components/Footer'

import { GlobalCss } from './styles'
import SiteRoutes from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <SiteRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
