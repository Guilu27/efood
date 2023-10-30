class Restaurant {
  tags: string[]
  image: string
  name: string
  rate: number
  description: string
  id: number

  constructor(
    tags: string[],
    image: string,
    name: string,
    rate: number,
    description: string,
    id: number
  ) {
    this.tags = tags
    this.image = image
    this.name = name
    this.rate = rate
    this.description = description
    this.id = id
  }
}

export default Restaurant
