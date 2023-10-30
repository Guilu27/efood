import RestaurantCard from '../RestaurantCard'
import { RestaurantsContainer } from './styles'

const RestaurantsList = () => {
  return (
    <RestaurantsContainer>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </RestaurantsContainer>
  )
}

export default RestaurantsList
