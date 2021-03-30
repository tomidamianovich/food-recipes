import { render, screen } from '@testing-library/react';
import CardsContainer from './CardsContainer';
import { initialState } from '../../store/reducer'

it('Cards Container renders without crashing', () => {
  const component = () => render(<CardsContainer cards={initialState.recipes} />);
  expect(component).toBeDefined();
});

it('Cards Container is being showed and the wrapper class is present', () => {
  render(<CardsContainer cards={initialState.recipes} />);
  const cardsContainer = screen.getByTestId('cards-container');
  expect(cardsContainer).toBeInTheDocument();
  expect(cardsContainer).not.toBeNull();
  expect(cardsContainer).toHaveClass("CardsContainer-wrapper-1")
})

it('Cards are being showed and the amount of cards is correct', () => {
  render(<CardsContainer cards={initialState.recipes} />);
  const cards = screen.getAllByTestId('card-n', { exact: false })
  expect(cards.length).toBe(initialState.recipes.length)
  expect(screen.getByText(initialState.recipes[0].title)).toBeInTheDocument()
  expect(screen.getByText(initialState.recipes[1].title)).toBeInTheDocument()
  expect(screen.getByText(initialState.recipes[2].title)).toBeInTheDocument()
  expect(screen.getByText(initialState.recipes[3].title)).toBeInTheDocument()
})
