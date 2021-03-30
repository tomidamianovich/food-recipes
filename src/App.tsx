import './App.css';
import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import AddRecipe from './components/AddRecipe/AddRecipe'
import { withRecipesTheme } from './styles/Theme';
import { IRecipe, RecipeState } from './type';
import { useSelector } from 'react-redux'

function App() {
  const recipes:IRecipe[]  = useSelector((state:RecipeState) => state.recipes)
  const getIndexForNewRecipes = () => {
    const lastRecipeArrayIndex = recipes.reduce((maxIndex, x, i, arr) => x.id > arr[maxIndex].id ? i : maxIndex, 0);
    return recipes[lastRecipeArrayIndex].id >= 0 ? recipes[lastRecipeArrayIndex].id + 1 : 0
  }
  return (
    <div className="App">
      <Header
        title="Recipes"
      />
     <CardsContainer 
        cards={recipes}
      />
      <AddRecipe recipeIndex={getIndexForNewRecipes()} />
    </div>
  );
}

export default withRecipesTheme(App);
