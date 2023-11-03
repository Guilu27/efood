import Food from './Food'

class Restaurant {
  tags: string[]
  nationality: string
  image: string
  name: string
  rate: number
  description: string
  foods: Food[]
  isSelected: boolean
  id: number

  constructor(
    tags: string[],
    nationality: string,
    image: string,
    name: string,
    rate: number,
    description: string,
    foods: Food[],
    isSelected: boolean,
    id: number
  ) {
    this.tags = tags
    this.nationality = nationality
    this.image = image
    this.name = name
    this.rate = rate
    this.description = description
    this.foods = foods
    this.isSelected = isSelected
    this.id = id
  }
}

export default Restaurant
