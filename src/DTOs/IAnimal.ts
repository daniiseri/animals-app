export interface Characteristics {
  [key: string]: any
}

interface Taxonomy {
  [key: string]: any
}

export interface IAnimal {
  name: string
  taxonomy: Taxonomy
  locations: string[]
  characteristics: Characteristics
}