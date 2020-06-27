import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#851520',
      main: '#bf1e2e',
      light: '#cb4b57',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#a5272a',
      main: '#ed393d',
      light: '#f06063',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f2f2f2',
    },
  },
});
