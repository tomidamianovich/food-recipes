import './App.css';
import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import { withRecipesTheme } from './styles/Theme';
import { RecipesData } from './utils/store'

function App() {
  return (
    <div className="App">
      <Header
        title="Recipes"
      />
      <CardsContainer 
        cards={RecipesData}
      />
    </div>
  );
}

export default withRecipesTheme(App);
