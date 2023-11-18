import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import * as S from './style'
import { open } from '../../store/reducers/cart'

export type Props = {
  type: 'main' | 'restaurant'
}

const Header = ({ type }: Props) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
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
        0 produto(s) no carrinho
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
