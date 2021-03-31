import React from 'react';
import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from '../AddRecipeForm/AddRecipeForm.styles'
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { IRecipe } from "../../type"

type Props = {
	recipeInfo: IRecipe,
  isModalVisible: boolean,
} & WithStyles<typeof styles>;

const ShowRecipeModal: React.FC<Props> = ({
	classes,
  isModalVisible = false,
	recipeInfo
}) => {
	return (
		<div>
			<Modal
				open={isModalVisible}
				className={classes.modal}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				closeAfterTransition
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
        <Fade in={isModalVisible}>
          <div className={classes.paper}>
            {recipeInfo.title}
            {recipeInfo.description}
            {recipeInfo.steps}
            {recipeInfo.ingredients}
          </div>
        </Fade>
			</Modal>
		</div>
	);
}

export default withStyles(styles)(ShowRecipeModal);