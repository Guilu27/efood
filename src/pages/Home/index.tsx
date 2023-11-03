import Header from '../../components/Header'
import CardsList from '../../components/CardsList'
import Restaurant from '../../models/Restaurant'

import LaDolce from '../../assets/images/la_dolce.png'
import Sushi from '../../assets/images/hioki_sushi.png'

const restaurants: Restaurant[] = [
  {
    tags: [],
    nationality: 'Italiana',
    image: LaDolce,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    foods: [
      {
        image: LaDolce,
        name: 'Spaghetti Carbonara',
        description: 'Espaguete cremoso com pancetta e queijo Parmesão.',
        id: 1
      },
      {
        image: LaDolce,
        name: 'Pizza Margherita',
        description: 'Pizza clássica com tomate, mussarela e manjericão.',
        id: 2
      },
      {
        image: LaDolce,
        name: 'Lasanha',
        description: 'Camadas de massa com molho à bolonhesa e queijo.',
        id: 3
      },
      {
        image: LaDolce,
        name: 'Tiramisu',
        description: 'Sobremesa italiana com café e queijo mascarpone.',
        id: 4
      }
    ],
    isSelected: false,
    id: 1
  },
  {
    tags: ['Destaque da semana'],
    nationality: 'Japonês',
    image: Sushi,
    name: 'Hioki Sushi ',
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    foods: [
      {
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/0e/1e/39/45/sushi-de-salmao.jpg',
        name: 'Sushi de Salmão',
        description:
          'Pequenos bolinhos de arroz cobertos com fatias de salmão fresco.',
        id: 9
      },
      {
        image: Sushi,
        name: 'Sashimi de Atum',
        description:
          'Fatias finas de atum cru fresco, servidas com molho de soja e wasabi.',
        id: 10
      },
      {
        image: Sushi,
        name: 'Temaki Califórnia',
        description:
          'Um cone de alga recheado com abacate, caranguejo, pepino e arroz.',
        id: 11
      },
      {
        image: Sushi,
        name: 'Tempura de Camarão',
        description:
          'Camarões crocantes em uma massa leve, acompanhados de molho de mergulho.',
        id: 12
      }
    ],
    isSelected: false,
    id: 2
  }
]

const Home = () => {
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
