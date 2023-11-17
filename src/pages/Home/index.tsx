import Header from '../../components/Header'
import CardsList from '../../components/CardsList'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <div>
        <Header type="main" />
        <div className="container">
          <CardsList type="restaurants" restaurants={restaurants} />
        </div>
      </div>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home
