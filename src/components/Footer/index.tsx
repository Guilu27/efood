import Logo from '../../assets/images/logo.svg'
import Instagram from '../../assets/images/instagram.svg'
import Facebook from '../../assets/images/facebook.svg'
import Twitter from '../../assets/images/twitter.svg'

import * as S from './style'

const Footer = () => {
  return (
    <S.FooterContainer>
      <img src={Logo} alt="" />
      <S.FooterSocials>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="" />
          </a>
        </li>
      </S.FooterSocials>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </S.FooterContainer>
  )
}

export default Footer
