import { render, screen } from '@testing-library/react';
import CardsContainer from './CardsContainer';
import { RecipesData } from '../../utils/store'

it('Cards Container renders without crashing', () => {
  const component = () => render(<CardsContainer cards={RecipesData} />);
  expect(component).toBeDefined();
});

it('Cards Container is being showed and the wrapper class is present', () => {
  render(<CardsContainer cards={RecipesData} />);
  const cardsContainer = screen.getByTestId('cards-container');
  expect(cardsContainer).toBeInTheDocument();
  expect(cardsContainer).not.toBeNull();
  expect(cardsContainer).toHaveClass("CardsContainer-wrapper-1")
})

it('Cards are being showed and the amount of cards is correct', () => {
  render(<CardsContainer cards={RecipesData} />);
  const cards = screen.getAllByTestId('card-n', { exact: false })
  expect(cards.length).toBe(RecipesData.length)
  expect(screen.getByText(RecipesData[0].title)).toBeInTheDocument()
  expect(screen.getByText(RecipesData[1].title)).toBeInTheDocument()
  expect(screen.getByText(RecipesData[2].title)).toBeInTheDocument()
  expect(screen.getByText(RecipesData[3].title)).toBeInTheDocument()
})
