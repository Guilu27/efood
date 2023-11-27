import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { PriceFormatter, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [currentStep, setCurrentStep] = useState(1)

  const goToDelivery = () => setCurrentStep(2)
  const goToPayment = () => setCurrentStep(3)
  const goToCart = () => setCurrentStep(1)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        {currentStep === 1 && (
          <>
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
              <span>{PriceFormatter(getTotalPrice(items))}</span>
            </S.TotalValue>
            <Button title="Continuar com a entrega" onClick={goToDelivery}>
              Continuar com a entrega
            </Button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <S.Form>
              <h2>Entraga</h2>
              <div>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input type="text" id="fullName" name="fullName" />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="adress">Endereço</label>
                    <input type="text" id="adress" name="adress" />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" name="city" />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="CEP">CEP</label>
                    <input type="text" id="CEP" name="CEP" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="HouseNumber">Número</label>
                    <input type="text" id="HouseNumber" name="HouseNumber" />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input type="text" id="complement" name="complement" />
                  </S.InputGroup>
                </S.Row>
              </div>

              <Button title="Continuar com o pagamento" onClick={goToPayment}>
                Continuar com o pagamento
              </Button>
              <Button title="Voltar para o carrinho" onClick={goToCart}>
                Voltar para o carrinho
              </Button>
            </S.Form>
          </>
        )}

        {currentStep === 3 && (
          <>
            <S.Form>
              <h2>Pagamento - Valor a pagar R$ 190,90</h2>
              <div>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input type="text" id="cardOwner" name="cardOwner" />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" name="cardNumber" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" name="cardCode" />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input type="text" id="expiresMonth" name="expiresMonth" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear" name="expiresYear" />
                  </S.InputGroup>
                </S.Row>
              </div>
              <Button title="Finalizar pagamento">Finalizar pagamento</Button>
              <Button
                title="Voltar para a edição de endereço"
                onClick={goToDelivery}
              >
                Voltar para a edição de endereço
              </Button>
            </S.Form>
          </>
        )}

        <S.CartCloseButton onClick={closeCart} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
