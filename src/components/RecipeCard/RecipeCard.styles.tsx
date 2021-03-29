import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import { colors } from '../../styles/Theme';

const styles = (theme: Theme) =>
  createStyles({
    cardWrapper: {
      flex: '0 1 25%',
      maxHeight: '27em',
      height: '100%',
      width: '25%',
      padding: '1rem',
      margin: '1rem',
      minHeight: 170,
      boxShadow: theme.shadows[0],
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: colors.bgGrey,
      color: colors.black
    },
    title: {
      fontSize: 16,
      color: colors.black
    },
    description: {
      fontSize: 14
    },
    buttonWrapper: {
      margin: 'auto',
      display: 'block'
    }
  });

export default styles