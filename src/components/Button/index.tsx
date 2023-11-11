import { ButtonContainer } from './styles'

export type Props = {
  title: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button = ({ title, onClick, children, variant = 'primary' }: Props) => {
  return (
    <ButtonContainer
      type="button"
      title={title}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
