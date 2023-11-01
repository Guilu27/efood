import Header from '../../components/Header'
import CardsList from '../../components/CardsList'

const Home = () => (
  <div>
    <Header type="main" />
    <div className="container">
      <CardsList type="restaurants" />
    </div>
  </div>
)

export default Home
