import { ADD_CONTACT, SET_STATUS, FETCH_CONTACTS, RECEIVE_CONTACTS } from './types.js';
import fetch from 'isomorphic-fetch';

export const fetchContacts = () => {
    return (dispatch, getState) => {
        return fetch('/api')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch(receiveContacts(data));
        })
    }
};

export const receiveContacts = (contacts) => ({
    type: RECEIVE_CONTACTS,
    contacts
});

export const addContact = (contact) => ({
    type: ADD_CONTACT,
    contact
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
