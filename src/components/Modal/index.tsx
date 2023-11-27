import { useDispatch } from 'react-redux'

import Button from '../Button'
import * as S from './styles'

import Close from '../../assets/images/close.svg'
import { open, add } from '../../store/reducers/cart'
import { PriceFormatter } from '../../utils'

export type Props = {
  isVisible: boolean
  onClose: () => void
  menuItem?: MenuItem
}

const Modal = ({ isVisible, onClose, menuItem }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (menuItem) {
      dispatch(add(menuItem))
    }
    dispatch(open())
    onClose()
  }

  return (
    <S.ModalContainer className={isVisible ? 'visible' : ''}>
      <S.ModalContent className="container">
        <S.FoodDetails>
          <h3>{menuItem?.nome}</h3>
          <p>
            {menuItem?.descricao} <span>{menuItem?.porcao}</span>
          </p>
          <img src={Close} alt="fechar modal" onClick={onClose} />

          <Button title="Adicionar ao carrinho" onClick={addToCart}>
            Adicionar ao carrinho - {PriceFormatter(menuItem?.preco)}
          </Button>
        </S.FoodDetails>
        <img src={menuItem?.foto} alt="" />
      </S.ModalContent>

      <div className="overlay" onClick={onClose}></div>
    </S.ModalContainer>
  )
}
export default Modal
