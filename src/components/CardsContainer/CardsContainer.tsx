import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import Card from '../RecipeCard/RecipeCard'
import styles from '../CardsContainer/CardsContainer.styles'
import { Recipe } from '../../utils/Interfaces'

type Props = {
	cards: Array<Recipe>;
} & WithStyles<typeof styles>;

const CardsContainer: React.FC<Props> = ({
	classes,
	cards
}) => {
	return (
		<div className={classes.wrapper}>
			{cards.map((card) => (
				<Card cardInfo={card} />
      ))}
		</div>
	);
}

export default withStyles(styles)(CardsContainer);