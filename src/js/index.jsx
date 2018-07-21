import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './app.jsx';

import store from './redux/store.js';

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, 
        document.querySelector('#container')
);