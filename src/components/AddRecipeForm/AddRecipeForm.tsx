import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import styles from '../AddRecipeForm/AddRecipeForm.styles'
// import { FormControl, Fade, InputLabel, Input, TextField, FormHelperText } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Fade } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { IRecipe } from "../../type"
import { addRecipe } from "../../store/actionCreators"
import React from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  open: any;
  recipeIndex: number;
  handleModalVissibility: () => void;
} & WithStyles<typeof styles>;

const AddRecipeForm: React.FC<Props> = ({
  classes,
  open,
  handleModalVissibility,
  recipeIndex
}) => {
  const dispatch = useDispatch()
  return (
    <Fade in={open}>
      <div className={classes.paper}>
        <h2>Add Recipe Info </h2>
        <p>Fill out the following inputs in order to add a new recipe </p>
        <Formik
          initialValues={{
            title: '',
            description: '',
            ingredients: [''],
            steps: ['']
          }}
          validate={values => {
            const errors: Partial<IRecipe> = {};
            if (!values.title)
              errors.title = 'Required';
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              dispatch(
                addRecipe({
                  id: recipeIndex,
                  ...values
                })
              )
              handleModalVissibility()
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                name="title"
                label="Title"
                component={TextField}
                fullWidth
                />
              <Field
                name="description"
                label="Description"
                component={TextField}
                fullWidth
              />
              <Field
                name="ingredients"
                label="Ingredients"
                component={TextField}
                fullWidth
              />
              <Field
                name="steps"
                label="Steps"
                component={TextField}
                fullWidth
              />
              {isSubmitting && <LinearProgress />}
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Fade>
  );
}

export default withStyles(styles)(AddRecipeForm);