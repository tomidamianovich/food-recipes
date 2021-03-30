import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import styles from '../RecipeCard/RecipeCard.styles'
import { IRecipe } from "../../type"
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { removeRecipe } from "../../store/actionCreators"

type Props = {
	cardInfo: IRecipe;
	testid: string;
} & WithStyles<typeof styles>;

const RecipeCard: React.FC<Props> = ({
	classes,
	testid,
	cardInfo
}) => {
	const dispatch = useDispatch()

	const handleDeleteRecipe = () => {
		dispatch(removeRecipe(cardInfo))
	}

	return (
		<Card className={classes.cardWrapper} data-testid={testid}>
			<Button size="small" onClick={handleDeleteRecipe} className={classes.closeButton}>
				<CloseIcon />
			</Button>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{cardInfo.title}
        </Typography>
				<Typography className={classes.description} color="textSecondary" gutterBottom>
					{cardInfo.description}
        </Typography>
			</CardContent>
			<CardActions className={classes.buttonWrapper}>
        <Button size="small">Show Recipe</Button>
      </CardActions>
		</Card>
	);
}

export default withStyles(styles)(RecipeCard);