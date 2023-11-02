import Card from '../Card'
import { CardsContainer } from './styles'

export type Props = {
  type: 'restaurants' | 'foods'
}

const CardsList = ({ type }: Props) => {
  return (
    <CardsContainer type={type}>
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
    </CardsContainer>
  )
}

export default CardsList
