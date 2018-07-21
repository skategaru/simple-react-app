import { ADD_CONTACT, SET_STATUS } from './types.js';


export const addContact = (contact) => ({
    type: ADD_CONTACT,
    contact
});


export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
