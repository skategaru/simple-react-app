import { ADD_CONTACT, SET_STATUS, RECEIVE_CONTACTS } from './types';


const initialState =  {
    data: [],
    status: 'active' // 'locked'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            return ({
                ...state,
                data: [...state.data, action.contact] 
            });
        }
        case SET_STATUS: {
            return ({
                ...state,
                status: action.status
            });
        }
        case RECEIVE_CONTACTS: {
            return ({
                ...state,
                data: [...state.data, ...action.contacts] 
            });
        }
        default: {
            return state;
        }
    }
};