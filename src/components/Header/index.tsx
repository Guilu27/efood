import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import * as S from './style'
import { RootReducer } from '../../store'
import { select } from '../../store/reducers/restaurants'

export type Props = {
  type: 'main' | 'restaurant'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.restaurant)
  const navigate = useNavigate()

  function ResetingisSelected() {
    const selectedRestaurant = itens.filter((item) => item.isSelected === true)

    if (selectedRestaurant.length > 0) {
      dispatch(
        select({
          id: selectedRestaurant[0].id,
          isSelected: !selectedRestaurant[0].isSelected
        })
      )
    }

    navigate('/')
  }

  const renderMainHeader = () => (
    <div className="container">
      <S.Logo>
        <img src={Logo} alt="Efood" />
      </S.Logo>
      <S.Text>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </S.Text>
    </div>
  )

  const renderRestaurantHeader = () => (
    <div className="container">
      <S.Logo>
        <img src={Logo} alt="Efood" />
      </S.Logo>
      <S.HeaderButton
        className="restaurantsButton"
        onClick={ResetingisSelected}
      >
        Restaurantes
      </S.HeaderButton>
      <S.HeaderButton>0 produto(s) no carrinho</S.HeaderButton>
    </div>
  )

  return (
    <S.HeaderContainer type={type}>
      {type === 'main' ? renderMainHeader() : renderRestaurantHeader()}
    </S.HeaderContainer>
  )
}

export default Header
