import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'

const RestaurantPage = () => (
  <div>
    <Header type="restaurant" />
    <Banner />
    <div className="container">
      <CardsList type="foods" />
    </div>
  </div>
)

export default RestaurantPage
