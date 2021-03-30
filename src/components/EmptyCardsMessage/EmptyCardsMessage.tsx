import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from '../EmptyCardsMessage/EmptyCardsMessage.styles'
import Alert from '@material-ui/lab/Alert';

type Props = WithStyles<typeof styles>;

const EmptyCardsMessage: React.FC<Props> = ({
	classes,
}) => {
	return (
    <Alert severity="info">
      There are no recipes added. Add the first one clicking "Add Recipe"
    </Alert>
	);
}

export default withStyles(styles)(EmptyCardsMessage);