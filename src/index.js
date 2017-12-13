import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import store from './store.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
    palette: {
        primaryColor: '#74b01b',
        secondaryColor: '#183395'
    }
})
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider muiTheme={muiTheme}>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>

    , document.getElementById('root'));

