import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './components/Footer'
import SiteRoutes from './routes'
import Cart from './components/Cart'

import { store } from './store'

import { GlobalCss } from './styles'

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
