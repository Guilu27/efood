import Restaurant from '../../models/Restaurant'
import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

const Banner = ({ restaurants }: Props) => {
  if (restaurants) {
    return (
      <div>
        {restaurants.map((restaurant) => (
          <S.Image
            key={restaurant.id}
            style={{ backgroundImage: `url(${restaurant.image})` }}
          >
            <div className="container">
              <h2>{restaurant.name}</h2>
              <p>{restaurant.nationality}</p>
            </div>
          </S.Image>
        ))}
      </div>
    )
  }
  return null // ou qualquer conteúdo padrão caso não haja dados
}
export default Banner
