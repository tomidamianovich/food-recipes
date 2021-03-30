import { render, screen } from '@testing-library/react';
import RecipeCard from './RecipeCard';
import { initialState } from '../../store/reducer'

it('Cards Container renders without crashing', () => {
  const component = () => render(
    <RecipeCard
      cardInfo={initialState.recipes[0]}
      key={initialState.recipes[0].id}
      testid={`card-n${initialState.recipes[0].id}`}
    />
  );
  expect(component).toBeDefined();
});

it('Card is being showed and the wrapper class is present', () => {
  render(
    <RecipeCard
      cardInfo={initialState.recipes[0]}
      key={initialState.recipes[0].id}
      testid={`card-n${initialState.recipes[0].id}`}
    />
  );
  const Card = screen.getByTestId('card-n', { exact: false })
  expect(Card).not.toBeNull();
  expect(Card).toHaveClass("RecipeCard-cardWrapper-1")
  expect(screen.getByText(initialState.recipes[0].title)).toBeInTheDocument()
  expect(screen.getByText(initialState.recipes[0].description)).toBeInTheDocument()
})
