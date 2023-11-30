import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeStep, close, remove } from '../../store/reducers/cart'
import { PriceFormatter, getTotalPrice } from '../../utils'

const Cart = () => {
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'pelo menos 5 caracteres')
        .required('obrigatório'),

      address: Yup.string()
        .min(5, 'pelo menos 5 caracteres')
        .required('obrigatório'),

      city: Yup.string()
        .min(5, 'pelo menos 5 caracteres')
        .required('obrigatório'),

      cep: Yup.string()
        .min(9, 'CEP invalido')
        .max(9, 'CEP invalido')
        .required('obrigatório'),

      houseNumber: Yup.number().required('obrigatório'),

      complement: Yup.string(),

      cardOwner: Yup.string().required('obrigatório'),

      cardNumber: Yup.string().required('obrigatório'),

      cardCode: Yup.string().required('obrigatório'),

      expiresMonth: Yup.string().required('obrigatório'),

      expiresYear: Yup.string().required('obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return ` (${message})`
    return ''
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const { isOpen, items, currentStep } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const changeCurrentStep = (step: number) => {
    dispatch(changeStep(step))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            {currentStep === 1 ? (
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
                <Button
                  title="Continuar com a entrega"
                  onClick={() => changeCurrentStep(2)}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <S.Form onSubmit={form.handleSubmit}>
                {currentStep === 2 ? (
                  <>
                    <h2>Entraga</h2>
                    <div>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="fullName">
                            Quem irá receber
                            <span>
                              {getErrorMessage(
                                'fullName',
                                form.errors.fullName
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('fullName') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.fullName}
                            type="text"
                            id="fullName"
                            name="fullName"
                          />
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="address">
                            Endereço
                            <span>
                              {getErrorMessage('address', form.errors.address)}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('address') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.address}
                            type="text"
                            id="address"
                            name="address"
                          />
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="city">
                            Cidade
                            <span>
                              {getErrorMessage('city', form.errors.city)}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('city') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.city}
                            type="text"
                            id="city"
                            name="city"
                          />
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="cep">
                            CEP
                            <span>
                              {getErrorMessage('cep', form.errors.cep)}
                            </span>
                          </label>
                          <input
                            className={checkInputHasError('cep') ? 'error' : ''}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.cep}
                            type="text"
                            id="cep"
                            name="cep"
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="houseNumber">
                            Número
                            <span>
                              {getErrorMessage(
                                'houseNumber',
                                form.errors.houseNumber
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('houseNumber') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.houseNumber}
                            type="text"
                            id="houseNumber"
                            name="houseNumber"
                          />
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="complement">
                            Complemento (opcional)
                          </label>
                          <input
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.complement}
                            type="text"
                            id="complement"
                            name="complement"
                          />
                        </S.InputGroup>
                      </S.Row>
                    </div>

                    <Button
                      title="Continuar com o pagamento"
                      onClick={() => changeCurrentStep(3)}
                      disabled={true}
                    >
                      Continuar com o pagamento
                    </Button>
                    <Button
                      title="Voltar para o carrinho"
                      onClick={() => changeCurrentStep(1)}
                    >
                      Voltar para o carrinho
                    </Button>
                  </>
                ) : (
                  <>
                    <h2>
                      Pagamento - Valor a pagar
                      <span> {PriceFormatter(getTotalPrice(items))}</span>
                    </h2>
                    <div>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="cardOwner">
                            Nome no cartão
                            <span>
                              {getErrorMessage(
                                'cardOwner',
                                form.errors.cardOwner
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('cardOwner') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.cardOwner}
                            type="text"
                            id="cardOwner"
                            name="cardOwner"
                          />
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="cardNumber">
                            Número do cartão
                            <span>
                              {getErrorMessage(
                                'cardNumber',
                                form.errors.cardNumber
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('cardNumber') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.cardNumber}
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                          />
                        </S.InputGroup>
                        <S.InputGroup maxWidth="87px">
                          <label htmlFor="cardCode">
                            CVV
                            <span>
                              {getErrorMessage(
                                'cardCode',
                                form.errors.cardCode
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('cardCode') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.cardCode}
                            type="text"
                            id="cardCode"
                            name="cardCode"
                          />
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="expiresMonth">
                            Mês de vencimento
                            <span>
                              {getErrorMessage(
                                'expiresMonth',
                                form.errors.expiresMonth
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('expiresMonth') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.expiresMonth}
                            type="text"
                            id="expiresMonth"
                            name="expiresMonth"
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="expiresYear">
                            Ano de vencimento
                            <span>
                              {getErrorMessage(
                                'expiresYear',
                                form.errors.expiresYear
                              )}
                            </span>
                          </label>
                          <input
                            className={
                              checkInputHasError('expiresYear') ? 'error' : ''
                            }
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            value={form.values.expiresYear}
                            type="text"
                            id="expiresYear"
                            name="expiresYear"
                          />
                        </S.InputGroup>
                      </S.Row>
                    </div>
                    <Button title="Finalizar pagamento" type="submit">
                      Finalizar pagamento
                    </Button>
                    <Button
                      title="Voltar para a edição de endereço"
                      onClick={() => changeCurrentStep(2)}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </>
                )}
              </S.Form>
            )}
          </>
        ) : (
          <p className="empty-text">
            O carrinho esta vazio, adicione pelo menos um prato para continuar
            com a compra
          </p>
        )}

        <S.CartCloseButton onClick={closeCart} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
