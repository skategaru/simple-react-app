

/**
    Shape of our store (state)

    {
        data: [],
        contact: {
            firstName: '',
            lastName: ''
        },
        status: 'active' // 'locked'
    }
 */

import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import contactFormApp from './reducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(contactFormApp, applyMiddleware(logger, ReduxThunk));

export default store;