export interface IRecipe {
  id: number
  title: string
  ingredients: string[],
  description: String,
  steps: String[]
}

export type RecipeState = {
  recipes: IRecipe[]
}

export type RecipeAction = {
  type: string
  payload: IRecipe
}

export type DispatchType = (args: RecipeAction) => RecipeAction