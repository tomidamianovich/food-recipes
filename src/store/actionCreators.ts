import { 
  RecipeState,
  IRecipe,
  RecipeAction,
  DispatchType,
  } from "../type"
  import * as actionTypes from "./actionTypes"

export function addRecipe(payload: IRecipe) {
  const action: RecipeAction = {
    type: actionTypes.ADD_RECIPE,
    payload
  }

  return simulateHttpRequest(action)
}

export function removeRecipe(payload: IRecipe) {
  const action: RecipeAction = {
    type: actionTypes.REMOVE_RECIPE,
    payload
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: RecipeAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}