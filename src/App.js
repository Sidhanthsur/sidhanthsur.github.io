import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home'
import color from './Themes/Colors'
import { createMuiTheme, MuiThemeProvider, } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: color.background
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
