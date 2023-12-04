import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'

import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeStep, close, remove, clear } from '../../store/reducers/cart'
import { PriceFormatter, getTotalPrice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const [isAddressButtonDisabled, setIsAddressButtonDisabled] = useState(true)
  const [isPaymentButtonDisabled, setIsPaymentButtonDisabled] = useState(true)
  const [purchase, { isLoading, isSuccess, data, reset }] =
    usePurchaseMutation()
  const { isOpen, items, currentStep } = useSelector(
    (state: RootReducer) => state.cart
  )

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

      houseNumber: Yup.string().required('obrigatório'),

      complement: Yup.string(),

      cardOwner: Yup.string().when((values, schema) =>
        currentStep === 3 ? schema.required('obrigatório') : schema
      ),

      cardNumber: Yup.string().when((values, schema) =>
        currentStep === 3 ? schema.required('obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        currentStep === 3 ? schema.required('obrigatório') : schema
      ),

      expiresMonth: Yup.string().when((values, schema) =>
        currentStep === 3 ? schema.required('obrigatório') : schema
      ),

      expiresYear: Yup.string().when((values, schema) =>
        currentStep === 3 ? schema.required('obrigatório') : schema
      )
    }),
    onSubmit: (values, { resetForm }) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })

      resetForm()
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

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    if (isSuccess) {
      dispatch(clear())
      reset()
    }
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const changeCurrentStep = (step: number) => {
    dispatch(changeStep(step))
  }

  const handleCompletePurchase = () => {
    dispatch(close())
    dispatch(clear())
    reset()
  }

  useEffect(() => {
    const checkAddressFormErrors = () => {
      return (
        'fullName' in form.errors ||
        !('fullName' in form.touched) ||
        'address' in form.errors ||
        !('address' in form.touched) ||
        'city' in form.errors ||
        !('city' in form.touched) ||
        'cep' in form.errors ||
        !('cep' in form.touched) ||
        'houseNumber' in form.errors ||
        !('houseNumber' in form.touched)
      )
    }

    const checkPaymentFormErrors = () => {
      return (
        'cardOwner' in form.errors ||
        !('cardOwner' in form.touched) ||
        'cardNumber' in form.errors ||
        !('cardNumber' in form.touched) ||
        'cardCode' in form.errors ||
        !('cardCode' in form.touched) ||
        'expiresMonth' in form.errors ||
        !('expiresMonth' in form.touched) ||
        'expiresYear' in form.errors ||
        !('expiresYear' in form.touched)
      )
    }

    setIsAddressButtonDisabled(checkAddressFormErrors())
    setIsPaymentButtonDisabled(checkPaymentFormErrors())
  }, [form.errors, form.touched])

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
                      disabled={isAddressButtonDisabled}
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
                    {isSuccess && data ? (
                      <S.SuccessMensage>
                        <h3>Pedido realizado - {data.orderId}</h3>
                        <p>
                          Estamos felizes em informar que seu pedido já está em
                          processo de preparação e, em breve, será entregue no
                          endereço fornecido.
                        </p>

                        <p>
                          Gostaríamos de ressaltar que nossos entregadores não
                          estão autorizados a realizar cobranças extras.{' '}
                        </p>

                        <p>
                          Lembre-se da importância de higienizar as mãos após o
                          recebimento do pedido, garantindo assim sua segurança
                          e bem-estar durante a refeição.
                        </p>

                        <p>
                          Esperamos que desfrute de uma deliciosa e agradável
                          experiência gastronômica. Bom apetite!
                        </p>
                        <Button
                          title="Concluir"
                          onClick={handleCompletePurchase}
                        >
                          Concluir
                        </Button>
                      </S.SuccessMensage>
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
                                  checkInputHasError('cardNumber')
                                    ? 'error'
                                    : ''
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
                                  checkInputHasError('expiresMonth')
                                    ? 'error'
                                    : ''
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
                                  checkInputHasError('expiresYear')
                                    ? 'error'
                                    : ''
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
                        <Button
                          title="Finalizar pagamento"
                          type="submit"
                          disabled={isPaymentButtonDisabled}
                        >
                          {isLoading
                            ? 'Finalizando pagamento...'
                            : 'Finalizar pagamento'}
                        </Button>
                        <Button
                          title="Voltar para a edição de endereço"
                          onClick={() => changeCurrentStep(2)}
                        >
                          Voltar para a edição de endereço
                        </Button>
                      </>
                    )}
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
