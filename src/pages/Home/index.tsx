import Header from '../../components/Header'
import CardsList from '../../components/CardsList'

import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <div>
        <Header type="main" />
        <div className="container">
          <CardsList
            type="restaurants"
            restaurants={restaurants}
            isLoading={isLoading}
          />
        </div>
      </div>
    )
  }

  return <Loader />
}
export default Home
