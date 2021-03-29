import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from '../Header/Header.styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

type Props = {
	title?: string;
} & WithStyles<typeof styles>;

const Header: React.FC<Props> = ({
	classes,
	title
}) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.container} data-testid="app-name">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(Header);