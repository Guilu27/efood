import RestaurantCard from '../RestaurantCard'
import { CardsContainer } from './styles'

export type Props = {
  type: 'restaurants' | 'foods'
}

const CardsList = ({ type }: Props) => {
  if (type === 'restaurants') {
    return (
      <CardsContainer type={type}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </CardsContainer>
    )
  }
  return (
    <CardsContainer type={type}>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </CardsContainer>
  )
}

export default CardsList
