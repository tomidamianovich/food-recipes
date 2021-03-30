import * as actionTypes from "./actionTypes"
import { 
  RecipeState,
  IRecipe,
  RecipeAction,
  DispatchType,
  } from "../type"

let lastId = 0;


const initialState:RecipeState = {
  recipes: [{
    id: 1,
    title: 'Rice',
    ingredients: ['Rice', 'salt'],
    description: 'Rice common recipe',
    steps: []
  },
  {
    id: 2,
    title: 'Meat',
    ingredients: ['Roast Beff', 'salt', 'onion'],
    description: 'Roast Beff common recipe',
    steps: []
  },
  {
    id: 3,
    title: 'French Fries',
    ingredients: ['Potato', 'salt'],
    description: 'French Fries common recipe',
    steps: []
  },
  {
    id: 4,
    title: 'Salad',
    ingredients: ['Tomato', 'onion'],
    description: 'Salad common recipe',
    steps: []
  }]
};


const reducer = (
  state: RecipeState = initialState,
  action: RecipeAction
): RecipeState => {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      const newRecipe: IRecipe = {
        id: ++lastId,
        title: action.payload.title,
        description: action.payload.description,
        ingredients: action.payload.ingredients,
        steps: action.payload.steps
      }
      return {
        ...state,
        recipes: state.recipes.concat(newRecipe),
      }
    case actionTypes.REMOVE_RECIPE:
      const updatedRecipes: IRecipe[] = state.recipes.filter(
        recipe => recipe.id !== action.payload.id
      )
      return {
        ...state,
        recipes: updatedRecipes,
      }
  }
  return state
}

export default reducer