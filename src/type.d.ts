export interface IRecipe {
  id: number
  title: string
  ingredients: string[],
  description: string,
  steps: string[]
}

export type RecipeState = {
  recipes: IRecipe[]
}

export type RecipeAction = {
  type: string
  payload: IRecipe
}

export type DispatchType = (args: RecipeAction) => RecipeAction