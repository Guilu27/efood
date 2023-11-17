import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'

import { useGetRestaurantQuery } from '../../services/api'

const RestaurantPage = () => {
  const { id } = useParams()

  const { data } = useGetRestaurantQuery(id ?? '1')
  const restaurant = data ? [data] : []

  if (restaurant) {
    return (
      <div>
        <Header type="restaurant" />
        <Banner restaurant={restaurant} />
        <div className="container">
          <CardsList type="foods" restaurants={restaurant} />
        </div>
      </div>
    )
  }
  return <h4>Carregando...</h4>
}

export default RestaurantPage
