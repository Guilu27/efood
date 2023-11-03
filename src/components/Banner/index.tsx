import { useSelector } from 'react-redux'

import * as S from './styles'
import { RootReducer } from '../../store'

const Banner = () => {
  const { itens } = useSelector((state: RootReducer) => state.restaurant)

  function restaurantfiltred() {
    const selectedRestaurant = itens.filter((item) => item.isSelected === true)

    if (selectedRestaurant.length > 0) {
      return selectedRestaurant
    } else {
      return itens
    }
  }

  const restaurants = restaurantfiltred()

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
  return null
}
export default Banner
