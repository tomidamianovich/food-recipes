import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import styles from '../RecipeCard/RecipeCard.styles'
import { Recipe } from '../../utils/Interfaces'
import Button from '@material-ui/core/Button';

type Props = {
	cardInfo: Recipe;
} & WithStyles<typeof styles>;

const RecipeCard: React.FC<Props> = ({
	classes,
	cardInfo
}) => {
	return (
		<Card className={classes.cardWrapper}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{cardInfo.title}
        </Typography>
				<Typography className={classes.description} color="textSecondary" gutterBottom>
					{cardInfo.description}
        </Typography>
			</CardContent>
			<CardActions className={classes.buttonWrapper}>
        <Button size="small">Learn More</Button>
      </CardActions>
		</Card>
	);
}

export default withStyles(styles)(RecipeCard);