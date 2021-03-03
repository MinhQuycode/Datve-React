import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {ThemeProvider} from '@material-ui/core';
import theme from "./assets/styles/theme";
import store from './redux'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
             <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"));

reportWebVitals();
