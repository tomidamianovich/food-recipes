import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.dark,
			fontSize: theme.typography.h6.fontSize,
			padding: '1rem'
    }
  });

export default styles