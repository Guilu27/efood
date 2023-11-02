import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star.svg'
import Sushi from '../../assets/images/hioki_sushi.png'
import Button from '../Button'

export type Props = {
  type: 'restaurants' | 'foods'
}

const restaurantData = {
  restaurants: {
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa!...',
    tags: ['Destaque da semana', 'Japonesa'],
    image: Sushi,
    button: 'Saiba mais'
  },
  foods: {
    title: 'Pizza Marguerita',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa!...',
    image: Sushi,
    button: 'Adicionar ao carrinho'
  }
}

const Card = ({ type }: Props) => {
  const data = restaurantData[type]

  return (
    <S.CardContainer type={type}>
      <S.CardDetails>
        <S.CardInfo>
          <S.CardTitle>{data.title}</S.CardTitle>
          {type === 'restaurants' && 'tags' in data && (
            <>
              <S.CardTags>
                {data.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </S.CardTags>
              <S.CardInfo>
                <p>4.9</p>
                <img src={Star} alt="estrela amarela" />
              </S.CardInfo>
            </>
          )}
        </S.CardInfo>

        <S.CardDescription>{data.description}</S.CardDescription>

        <Button
          type={type === 'restaurants' ? 'link' : 'button'}
          title={data.button}
          to="/restaurant"
        >
          {type === 'restaurants' ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </S.CardDetails>

      <S.CardImage src={data.image} alt="" />
    </S.CardContainer>
  )
}

export default Card
