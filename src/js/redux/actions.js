import { ADD_CONTACT, SET_STATUS, RECEIVE_CONTACTS } from './types.js';
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

export const addContacts = (contact) => {
    return (dispatch, getState) => {
        return fetch('/api', {
        method: 'POST', 
        body: JSON.stringify(contact), 
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => dispatch(addContact(response.data)));
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
