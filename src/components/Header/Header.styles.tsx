import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
			color: theme.palette.primary.dark,
			fontSize: theme.typography.h6.fontSize,
			padding: '1rem'
    }
  });

export default styles