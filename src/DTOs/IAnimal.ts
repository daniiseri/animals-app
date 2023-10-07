export interface Characteristics {
  main_prey: string
  distinctive_feature: string
  wingspan: string
  habitat: string
  predators: string
  diet: string
  favorite_food: string
  type: string
  average_clutch_size: string
  slogan: string
  color: string
  skin_type: string
  top_speed: string
  lifespan: string
  weight: string
  heigh: string
}

interface Taxonomy {
  kingdom: string
  phylum: string
  class: string
}

export interface IAnimal {
  name: string
  taxonomy: Taxonomy
  locations: string[]
  characteristics: Characteristics
}