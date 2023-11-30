import { ButtonContainer } from './styles'

export type Props = {
  title: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({
  title,
  onClick,
  children,
  variant = 'primary',
  type = 'button',
  disabled
}: Props) => {
  return (
    <ButtonContainer
      type={type}
      title={title}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
