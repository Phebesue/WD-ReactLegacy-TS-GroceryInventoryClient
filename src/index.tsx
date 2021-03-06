import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

const theme = createMuiTheme({
  palette: {
     primary: {
        light: 'rgb(255,127,17)',
        main: 'rgb(193,124,116)',
        dark: 'rgb(143,36,0)'
        // dark: 'rgb(188,172,155)'
     },
     secondary: {
       light: 'rgb(254,239,236)',
       main: 'rgb(42,61,69)',
       dark: 'rgb(13,9,8)'
     },     
  }
  
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme = {theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
