import Logo from '../../assets/images/logo.svg'
import * as S from './style'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container">
        <S.Logo>
          <img src={Logo} alt="Efood" />
        </S.Logo>
        <S.Text>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </S.Text>
      </div>
    </S.HeaderContainer>
  )
}
export default Header
