import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star.svg'
import Button from '../Button'
import { select } from '../../store/reducers/restaurants'
import Restaurant from '../../models/Restaurant'
import Food from '../../models/Food'

export type Props = {
  type: 'restaurants' | 'foods'
  restaurant: Restaurant
  food?: Food
}

const Card = ({ type, restaurant, food }: Props) => {
  const isRestaurant = type === 'restaurants'
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formattedRestaurantName = restaurant.name
    .trim()
    .toLowerCase()
    .replace(/ /g, '_')

  function selectingRestaurant() {
    dispatch(
      select({
        id: restaurant.id,
        isSelected: true
      })
    )
    if (isRestaurant) {
      navigate(`/restaurant/${formattedRestaurantName}`)
    }
  }

  const renderTags = (
    <>
      <S.CardTags>
        {restaurant.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        <Tag>{restaurant.nationality}</Tag>
      </S.CardTags>
      <S.CardInfo>
        <p>{restaurant.rate}</p>
        <img src={Star} alt="estrela amarela" />
      </S.CardInfo>
    </>
  )

  const renderButtonTitle = isRestaurant
    ? 'Saiba mais'
    : 'Adicionar ao carrinho'

  return (
    <S.CardContainer type={type}>
      <S.CardDetails>
        <S.CardInfo>
          <S.CardTitle>
            {isRestaurant ? restaurant.name : food?.name}
          </S.CardTitle>
          {isRestaurant && renderTags}
        </S.CardInfo>

        <S.CardDescription>
          {isRestaurant ? restaurant.description : food?.description}
        </S.CardDescription>

        <Button title={renderButtonTitle} onClick={selectingRestaurant}>
          {renderButtonTitle}
        </Button>
      </S.CardDetails>

      <S.CardImage src={isRestaurant ? restaurant.image : food?.image} alt="" />
    </S.CardContainer>
  )
}

export default Card
