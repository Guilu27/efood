import { CircleLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './style'

const Loader = () => {
  return (
    <Container>
      <CircleLoader color={colors.red} />
    </Container>
  )
}

export default Loader
