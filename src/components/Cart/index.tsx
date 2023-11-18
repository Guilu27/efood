import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { PriceFormatter } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((sum, currentPrice) => {
      return (sum += currentPrice.preco!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <div>
                <h3>{item.nome}</h3>
                <span>{PriceFormatter(item.preco)}</span>
              </div>
              <img src={item.foto} />
              <button onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.TotalValue>
          <p>Valor Total</p>
          <span>{PriceFormatter(getTotalPrice())}</span>
        </S.TotalValue>
        <Button title="Continuar com a entrega">Continuar com a entrega</Button>
        <button onClick={closeCart} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
