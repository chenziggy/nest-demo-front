export type AnimalDto = {
  name: string;
  color: string;
  type: AnimalType;
}

export type AnimalEntity = {
  id: string
} & AnimalDto

enum AnimalType {
  Dog=1,
  Cat,
  Fish,
  Human,
  Chicken
}