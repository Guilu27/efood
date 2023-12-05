import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'

import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

const RestaurantPage = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetRestaurantQuery(id ?? '1')
  const restaurant = data ? [data] : []

  if (restaurant) {
    return (
      <div>
        <Header type="restaurant" />
        <Banner restaurant={restaurant} />
        <div className="container">
          <CardsList
            type="foods"
            restaurants={restaurant}
            isLoading={isLoading}
          />
        </div>
      </div>
    )
  }
  return <Loader />
}

export default RestaurantPage
