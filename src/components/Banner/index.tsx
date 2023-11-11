import { Restaurant } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurant: Restaurant[]
}

const Banner = ({ restaurant }: Props) => {
  if (!restaurant || restaurant.length === 0) {
    return null
  }

  return (
    <div>
      {restaurant.map((restaurant) => (
        <S.Image
          key={restaurant.id}
          style={{ backgroundImage: `url(${restaurant.capa})` }}
        >
          <div className="container">
            <h2>{restaurant.titulo}</h2>
            <p>{restaurant.tipo}</p>
          </div>
        </S.Image>
      ))}
    </div>
  )
}
export default Banner
