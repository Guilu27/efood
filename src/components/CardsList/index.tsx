import Card from '../Card'
import { CardsContainer } from './styles'

import { Restaurant } from '../../pages/Home'

export type Props = {
  type: 'restaurants' | 'foods'
  restaurants: Restaurant[]
}

const CardsList = ({ type, restaurants }: Props) => {
  const renderCards = (restaurant: Restaurant) => {
    if (type === 'restaurants') {
      return (
        <Card key={restaurant.id} restaurant={restaurant} type="restaurants" />
      )
    } else if (restaurant.cardapio && restaurant.id) {
      return restaurant.cardapio.map((menuItem) => (
        <Card
          key={menuItem.id}
          restaurant={restaurant}
          menuItem={menuItem}
          type="foods"
        />
      ))
    }
  }

  return (
    <CardsContainer type={type}>{restaurants.map(renderCards)}</CardsContainer>
  )
}

export default CardsList
