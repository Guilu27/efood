import Restaurant from '../../models/Restaurant'
import Card from '../Card'
import { CardsContainer } from './styles'

export type Props = {
  type: 'restaurants' | 'foods'
  restaurants: Restaurant[]
}

const CardsList = ({ type, restaurants }: Props) => {
  const renderCards = (restaurant: Restaurant) => {
    const commonProps = {
      type,
      tags: restaurant.tags,
      nationality: restaurant.nationality,
      image: restaurant.image,
      name: restaurant.name,
      rate: restaurant.rate,
      description: restaurant.description,
      id: restaurant.id,
      isSelected: restaurant.isSelected
    }

    if (type === 'restaurants') {
      return <Card key={restaurant.id} {...commonProps} />
    } else if (restaurant.foods && restaurant.id) {
      return restaurant.foods.map((food) => (
        <Card key={food.id} food={food} {...commonProps} />
      ))
    }
  }

  return (
    <CardsContainer type={type}>{restaurants.map(renderCards)}</CardsContainer>
  )
}

export default CardsList
