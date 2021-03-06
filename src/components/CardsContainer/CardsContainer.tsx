import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import Card from '../RecipeCard/RecipeCard'
import styles from '../CardsContainer/CardsContainer.styles'
import EmptyCardsMessage from '../EmptyCardsMessage/EmptyCardsMessage'
import { IRecipe } from "../../type"

type Props = {
	cards: IRecipe[];
} & WithStyles<typeof styles>;

const CardsContainer: React.FC<Props> = ({
	classes,
	cards
}) => {
	return (
		<div className={classes.wrapper} data-testid="cards-container">
			{cards.map((card) => <Card cardInfo={card} key={card.id} testid={`card-n${card.id}`}/>)}
			{ cards.length === 0 && <EmptyCardsMessage /> }
		</div>
	);
}

export default withStyles(styles)(CardsContainer);