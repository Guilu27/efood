import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star.svg'
import Button from '../Button'

import Modal from '../Modal'

export type Props = {
  type: 'restaurants' | 'foods'
  restaurant: Restaurant
  menuItem?: MenuItem
}

const Card = ({ type, restaurant, menuItem }: Props) => {
  const isRestaurant = type === 'restaurants'
  const navigate = useNavigate()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const renderTags = (
    <>
      <S.CardTags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </S.CardTags>
      <S.CardInfo>
        <p>{restaurant.avaliacao}</p>
        <img src={Star} alt="estrela amarela" />
      </S.CardInfo>
    </>
  )

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleButtonClick = () => {
    if (type === 'restaurants') {
      navigate(`/restaurant/${restaurant.id}`)
    } else if (type === 'foods') {
      toggleModal()
    }
  }

  const renderButtonTitle = isRestaurant ? 'Saiba mais' : 'Mais detalhes'

  return (
    <div>
      <S.CardContainer type={type}>
        <S.CardDetails>
          <S.CardInfo>
            <S.CardTitle>
              {isRestaurant ? restaurant.titulo : menuItem?.nome}
            </S.CardTitle>
            {isRestaurant && renderTags}
          </S.CardInfo>
          <S.CardDescription>
            {isRestaurant ? restaurant.descricao : menuItem?.descricao}
          </S.CardDescription>
          <Button
            title={renderButtonTitle}
            onClick={handleButtonClick}
            variant={type === 'restaurants' ? 'secondary' : 'primary'}
          >
            {renderButtonTitle}
          </Button>
        </S.CardDetails>
        <S.CardImage
          src={isRestaurant ? restaurant.capa : menuItem?.foto}
          alt=""
        />
      </S.CardContainer>
      <Modal
        isVisible={isModalVisible}
        onClose={toggleModal}
        menuItem={menuItem}
      />
    </div>
  )
}

export default Card
