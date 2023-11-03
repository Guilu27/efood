import { ButtonContainer } from './styles'

type Props = {
  title: string
  onClick?: () => void
  children: string
}

const Button = ({ title, onClick, children }: Props) => {
  return (
    <ButtonContainer type="button" title={title} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
