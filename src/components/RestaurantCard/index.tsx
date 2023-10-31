import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star.svg'
import Sushi from '../../assets/images/hioki_sushi.png'
import Button from '../Button'

const Restaurant = () => {
  return (
    <S.CardContainer>
      <S.RestaurantDetails>
        <S.RestaurantInfo>
          <S.RestaurantTitle>Hioki Sushi</S.RestaurantTitle>
          <S.RestaurantInfo>
            <p>4.9</p>
            <img src={Star} alt="" />
          </S.RestaurantInfo>
        </S.RestaurantInfo>

        <S.RestaurantDescription>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </S.RestaurantDescription>

        <Button type="link" title="Saiba mais desse resturante">
          Saiba mais
        </Button>
      </S.RestaurantDetails>
      <S.RestaurantTags>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </S.RestaurantTags>
      <S.RestaurantImage src={Sushi} alt="" />
    </S.CardContainer>
  )
}

export default Restaurant
