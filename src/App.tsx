import './App.css';
import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import { withRecipesTheme } from './styles/Theme';
import { IRecipe, RecipeState } from './type';
import { useSelector } from 'react-redux'

function App() {
  const recipes:IRecipe[]  = useSelector((state:RecipeState) => state.recipes)
  return (
    <div className="App">
      <Header
        title="Recipes"
      />
     <CardsContainer 
        cards={recipes}
      />
    </div>
  );
}

export default withRecipesTheme(App);
