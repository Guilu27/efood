import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star.svg'
import Button from '../Button'
import Food from '../../models/Food'
import { select } from '../../store/reducers/restaurants'

export type Props = {
  type: 'restaurants' | 'foods'
  tags: string[]
  nationality: string
  image: string
  name: string
  rate: number
  description: string
  food?: Food
  id: number
  isSelected: boolean
}

const Card = ({
  type,
  tags,
  nationality,
  image,
  name,
  rate,
  description,
  food,
  id,
  isSelected
}: Props) => {
  const isRestaurant = type === 'restaurants'
  const navigate = useNavigate()

  const dispatch = useDispatch()

  function selectingRestaurant() {
    dispatch(
      select({
        id,
        isSelected: true
      })
    )
    if (isRestaurant) {
      navigate('/restaurant')
    }
  }

  const renderTags = (
    <>
      <S.CardTags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        <Tag>{nationality}</Tag>
      </S.CardTags>
      <S.CardInfo>
        <p>{rate}</p>
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
          <S.CardTitle>{isRestaurant ? name : food?.name}</S.CardTitle>
          {isRestaurant && renderTags}
        </S.CardInfo>

        <S.CardDescription>
          {isRestaurant ? description : food?.description}
        </S.CardDescription>

        <Button title={renderButtonTitle} onClick={selectingRestaurant}>
          {renderButtonTitle}
        </Button>
      </S.CardDetails>

      <S.CardImage src={isRestaurant ? image : food?.image} alt="" />
    </S.CardContainer>
  )
}

export default Card
