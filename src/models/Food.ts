class Food {
  image: string
  name: string
  description: string
  id: number

  constructor(image: string, name: string, description: string, id: number) {
    this.image = image
    this.name = name
    this.description = description
    this.id = id
  }
}

export default Food
