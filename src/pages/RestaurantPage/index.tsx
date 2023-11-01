import Banner from '../../components/Banner'
import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

const RestaurantPage = () => (
  <div>
    <Header type="restaurant" />
    <Banner />
    <div className="container">
      <RestaurantsList />
    </div>
  </div>
)

export default RestaurantPage
