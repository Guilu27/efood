import Footer from './components/Footer'
import Header from './components/Header'
import RestaurantsList from './components/RestaurantsList'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />

      <Header />
      <div className="container">
        <RestaurantsList />
      </div>
      <Footer />
    </>
  )
}

export default App
