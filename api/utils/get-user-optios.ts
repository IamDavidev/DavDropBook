import { ANIMALS, COLORS } from '../../constants/editor-attr.ts'

export function getRandomIndex(max: number): number {
  return Math.floor(Math.random() * max)
}

export function getUserHexColor(): string {
  const colorsArray = [...COLORS.values()]
  return colorsArray[getRandomIndex(colorsArray.length)]
}

export function getUserAnimal(): string {
  const animalsArray = [...ANIMALS.values()]
  return animalsArray[getRandomIndex(animalsArray.length)]
}
