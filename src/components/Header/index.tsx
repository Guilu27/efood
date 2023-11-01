import Logo from '../../assets/images/logo.svg'
import * as S from './style'

export type Props = {
  type: 'main' | 'restaurant'
}

const Header = ({ type }: Props) => {
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
      <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
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
