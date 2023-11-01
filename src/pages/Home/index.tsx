import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

const Home = () => (
  <div>
    <Header type="main" />
    <div className="container">
      <RestaurantsList />
      <RestaurantsList />
    </div>
  </div>
)

export default Home
