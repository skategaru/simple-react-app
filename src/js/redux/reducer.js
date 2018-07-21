import { ADD_CONTACT, SET_STATUS } from './types';


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
        default: {
            return state;
        }
    }
};