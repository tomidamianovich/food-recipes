import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { ComponentType } from 'react';

export const colors = {
  white: 'rgb(255, 255, 255)',
  red: 'rgb(239, 56, 41)',
  lightRed: 'rgb(242, 222, 222)',
  error: 'rgb(183, 32, 46)',
  grey: 'rgb(133, 133, 133)',
	black: 'rgb(58, 56, 56)',
  bgGrey: 'rgb(238, 238, 238)',
  ligthGrey: 'rgba(250, 250, 250, 0.3)',
  ligtherGrey: 'rgb(238, 238, 238)',
  success: 'rgb(103, 167, 77)',
  bgSuccess: 'rgba(152, 217, 123, 0.12)',
  warning: 'rgb(255, 243, 205)',
  warningText: 'rgb(133, 100, 4)',
  info: 'rgb(222, 240, 243)',
  infoText: 'rgb(12, 84, 96)',
  infoSnackBar: 'rgb(25,118,210)',
  selectPlaceholder: 'rgba(0, 0, 0, 0.38)'
};

export const Theme = createMuiTheme({
	palette: {
		primary: {
			light: colors.white,
			main: 'rgb(251, 213, 55)',
			dark: colors.black,
			contrastText: 'rgb(255, 255, 255)'
		},
		secondary: {
			light: 'rgb(96, 200, 224)',
			main: 'rgb(31, 151, 174)',
			dark: 'rgb(0, 105, 127)',
			contrastText: 'rgb(0, 0, 0)'
		}
	},
	typography: {
		h6: {
			fontSize: '20px'
		}
	}
});

export function withRecipesTheme<P>(Component: ComponentType<P>) {
	function WithRecipesTheme(props: P) {
		return (
			<MuiThemeProvider theme={Theme}>
				<CssBaseline />
				<Component {...props} />
			</MuiThemeProvider>
		);
	}

	return WithRecipesTheme;
}
