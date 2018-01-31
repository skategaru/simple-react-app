import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import updateField from './reducers';

import createTeeMiddlware from './tee-middleware';

const logger = createLogger({
    collapsed: false
});

const tee = createTeeMiddlware({limit: 20000});

const store = {
    fname: 'Muqsith',
    lname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    currentField: 'email'
};

export default createStore(
        updateField,
        store,
        applyMiddleware(logger, tee)
    );
