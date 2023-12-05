import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'

import { changeStep, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './style'

export type Props = {
  type: 'main' | 'restaurant'
}

const Header = ({ type }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
    dispatch(changeStep(1))
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
        onClick={() => navigate('/')}
      >
        Restaurantes
      </S.HeaderButton>
      <S.HeaderButton onClick={openCart}>
        {items.length} produto(s) no carrinho
      </S.HeaderButton>
    </div>
  )

  return (
    <S.HeaderContainer type={type}>
      {type === 'main' ? renderMainHeader() : renderRestaurantHeader()}
    </S.HeaderContainer>
  )
}

export default Header
