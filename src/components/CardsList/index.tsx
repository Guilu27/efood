import Card from '../Card'
import Loader from '../Loader'

import { CardsContainer } from './styles'

export type Props = {
  type: 'restaurants' | 'foods'
  restaurants: Restaurant[]
  isLoading: boolean
}

const CardsList = ({ type, restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

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
