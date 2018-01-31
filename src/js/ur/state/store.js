import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import updateField from './reducers';

const logger = createLogger({
    collapsed: false
});

const store = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    currentField: 'email'
};

export default createStore(updateField, store, applyMiddleware(logger));
