import { useSelector } from 'react-redux'
import Restaurant from '../../models/Restaurant'
import Card from '../Card'
import { CardsContainer } from './styles'
import { RootReducer } from '../../store'

export type Props = {
  type: 'restaurants' | 'foods'
}

const CardsList = ({ type }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.restaurant)

  function restaurantfiltred() {
    const selectedRestaurant = itens.filter((item) => item.isSelected === true)

    if (selectedRestaurant.length > 0) {
      return selectedRestaurant
    } else {
      return itens
    }
  }

  const restaurants = restaurantfiltred()

  const renderCards = (restaurant: Restaurant) => {
    if (type === 'restaurants') {
      return (
        <Card key={restaurant.id} restaurant={restaurant} type="restaurants" />
      )
    } else if (restaurant.foods && restaurant.id) {
      return restaurant.foods.map((food) => (
        <Card key={food.id} food={food} restaurant={restaurant} type="foods" />
      ))
    }
  }

  return (
    <CardsContainer type={type}>{restaurants.map(renderCards)}</CardsContainer>
  )
}

export default CardsList
