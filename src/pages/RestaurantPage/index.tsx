import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

const RestaurantPage = () => (
  <div>
    <Header type="restaurant" />
    <div className="container">
      <RestaurantsList />
    </div>
  </div>
)

export default RestaurantPage
