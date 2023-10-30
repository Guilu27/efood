import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star.svg'
import Sushi from '../../assets/images/hioki_sushi.png'
import Button from '../Button'

const Restaurant = () => {
  return (
    <S.CardContainer>
      <S.RestaurantDetails>
        <div>
          <h2>Hioki Sushi</h2>
          <div>
            <p>4.9</p>
            <img src={Star} alt="" />
          </div>
        </div>

        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>

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
