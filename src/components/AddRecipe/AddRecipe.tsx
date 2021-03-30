import React from 'react';
import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm'
import styles from '../AddRecipe/AddRecipe.styles'
import { Button, Modal, Backdrop } from '@material-ui/core';

type Props = {
	recipeIndex: number
} & WithStyles<typeof styles>;

const AddRecipe: React.FC<Props> = ({
	classes,
	recipeIndex
}) => {
	const [open, setOpen] = React.useState(false);
	const handleModalVissibility = () => setOpen(!open)
	return (
		<div>
			<Button
				size="small"
				onClick={handleModalVissibility}>
				Add Recipe
			</Button>
			<Modal
				open={open}
				onClose={handleModalVissibility}
				className={classes.modal}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				closeAfterTransition
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<AddRecipeForm
					open={open}
					recipeIndex={recipeIndex} 
					handleModalVissibility={handleModalVissibility} />
			</Modal>
		</div>
	);
}

export default withStyles(styles)(AddRecipe);