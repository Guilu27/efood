import Header from '../../components/Header'
import Banner from '../../components/Banner'
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
        image:
          'https://www.thecandidcooks.com/wp-content/uploads/2022/04/spaghetti-carbonara-feature.jpg',
        name: 'Spaghetti Carbonara',
        description: 'Espaguete cremoso com pancetta e queijo Parmesão.',
        id: 1
      },
      {
        image:
          'https://blog.praticabr.com/wp-content/uploads/2023/06/margherita-1024x682.jpg',
        name: 'Pizza Margherita',
        description: 'Pizza clássica com tomate, mussarela e manjericão.',
        id: 2
      },
      {
        image:
          'https://portal.lodivino.com.br/images/receitas/lasanha-a-bolonhesa.jpg',
        name: 'Lasanha',
        description: 'Camadas de massa com molho à bolonhesa e queijo.',
        id: 3
      },
      {
        image:
          'https://www.receiteria.com.br/wp-content/uploads/tiramisu-facil-01.jpg',
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
          'https://receitinhas.com.br/wp-content/uploads/2018/08/iStock-615893140-730x365.jpg',
        name: 'Sushi de Salmão',
        description:
          'Pequenos bolinhos de arroz cobertos com fatias de salmão fresco.',
        id: 9
      },
      {
        image:
          'https://www.kien.com.br/pedido/wp-content/uploads/2014/09/302.jpg',
        name: 'Sashimi de Atum',
        description:
          'Fatias finas de atum cru fresco, servidas com molho de soja e wasabi.',
        id: 10
      },
      {
        image:
          'https://img.cybercook.com.br/imagens/receitas/590/temaki-california.jpg',
        name: 'Temaki Califórnia',
        description:
          'Um cone de alga recheado com abacate, caranguejo, pepino e arroz.',
        id: 11
      },
      {
        image:
          'https://mundo-nipo.com/wp-content/uploads/2020/03/Tempura-de-camar%C3%A3o-Foto-Dan-yul-Future-03.jpg',
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

const RestaurantPage = () => {
  return (
    <div>
      <Header type="restaurant" />
      <Banner restaurants={restaurants} />
      <div className="container">
        <CardsList type="foods" restaurants={restaurants} />
      </div>
    </div>
  )
}

export default RestaurantPage
