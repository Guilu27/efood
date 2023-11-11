import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'

import { Restaurant } from '../Home'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant([res]))
  }, [id])

  return (
    <div>
      <Header type="restaurant" />
      <Banner restaurant={restaurant} />
      <div className="container">
        <CardsList type="foods" restaurants={restaurant} />
      </div>
    </div>
  )
}

export default RestaurantPage
