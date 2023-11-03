import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import Restaurant from '../../models/Restaurant'
import Card from '../Card'
import { CardsContainer } from './styles'
import { RootReducer } from '../../store'
import { select } from '../../store/reducers/restaurants'

export type Props = {
  type: 'restaurants' | 'foods'
}

const CardsList = ({ type }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.restaurant)

  const dispatch = useDispatch()

  const { name } = useParams()

  const originalRestaurantName = name ? name.replace(/_/g, ' ') : ''

  const restaurantIndex = itens.findIndex(
    (restaurant) =>
      restaurant.name.toLocaleLowerCase().trim() === originalRestaurantName
  )

  useEffect(() => {
    if (restaurantIndex !== -1) {
      dispatch(
        select({
          id: itens[restaurantIndex].id,
          isSelected: true
        })
      )
    }
  }, [restaurantIndex, dispatch, itens])

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
