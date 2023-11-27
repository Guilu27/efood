import Header from '../../components/Header'
import CardsList from '../../components/CardsList'
import { useGetRestaurantsQuery } from '../../services/api'

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
