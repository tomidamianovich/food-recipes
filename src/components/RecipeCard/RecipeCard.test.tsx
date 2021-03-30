// import { render, screen } from '@testing-library/react';
// import RecipeCard from './RecipeCard';
// import { RecipesData } from '../../utils/store'

// it('Cards Container renders without crashing', () => {
//   const component = () => render(
//     <RecipeCard
//       cardInfo={RecipesData[0]}
//       key={RecipesData[0].id}
//       testid={`card-n${RecipesData[0].id}`}
//     />
//   );
//   expect(component).toBeDefined();
// });

// it('Card is being showed and the wrapper class is present', () => {
//   render(
//     <RecipeCard
//       cardInfo={RecipesData[0]}
//       key={RecipesData[0].id}
//       testid={`card-n${RecipesData[0].id}`}
//     />
//   );
//   const Card = screen.getByTestId('card-n', { exact: false })
//   expect(Card).not.toBeNull();
//   expect(Card).toHaveClass("RecipeCard-cardWrapper-1")
//   expect(screen.getByText(RecipesData[0].title)).toBeInTheDocument()
//   expect(screen.getByText(RecipesData[0].description)).toBeInTheDocument()
// })
