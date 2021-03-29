import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from '../Header/Header.styles';

type Props = {
	title?: string;
} & WithStyles<typeof styles>;

const Header: React.FC<Props> = ({
	classes,
	title
}) => {
	return (
		<div className={classes.container}>
			{title}
		</div>
	);
}

export default withStyles(styles)(Header);