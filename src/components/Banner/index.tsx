import * as S from './styles'

import bannerImg from '../../assets/images/hioki_sushi.png'

const Banner = () => {
  return (
    <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <h2>Hioki Sushi</h2>
        <p>Japonesa</p>
      </div>
    </S.Image>
  )
}

export default Banner
