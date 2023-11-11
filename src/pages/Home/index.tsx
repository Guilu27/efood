import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import CardsList from '../../components/CardsList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <div>
      <Header type="main" />
      <div className="container">
        <CardsList type="restaurants" restaurants={restaurants} />
      </div>
    </div>
  )
}

export default Home
