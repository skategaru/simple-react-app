

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

const store = createStore(contactFormApp, applyMiddleware(logger));

export default store;