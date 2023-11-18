import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        <ul>
          <S.CartItem>
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/YANRMY3TBZGWBCM2UDY6LEZJMA.jpg" />
            <button />
          </S.CartItem>
          <S.CartItem>
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/YANRMY3TBZGWBCM2UDY6LEZJMA.jpg" />
            <button />
          </S.CartItem>
        </ul>
        <S.TotalValue>
          <p>Valor Total</p>
          <span>R$ 182,70</span>
        </S.TotalValue>
        <Button title="Continuar com a entrega">Continuar com a entrega</Button>
        <button onClick={closeCart} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
