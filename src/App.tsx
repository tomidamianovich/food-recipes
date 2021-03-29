import './App.css';
import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import { withRecipesTheme } from './styles/Theme';

function App() {
  const data = [
    {
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
    }
  ];
  debugger
  return (
    <div className="App">
      <Header
        title="Recipes"
      />
      <CardsContainer 
        cards={data}
      />
    </div>
  );
}

export default withRecipesTheme(App);
