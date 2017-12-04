import { combineReducers } from 'redux';


function todo(state=[], action) {
    switch (action.type) {
        case 'ADD': {
            return ([
                ...state,
                {
                    description: action.description,
                    status: 'TODO',
                    id: (state.length + 1)
                }
            ]);
        }           
        case 'COMPLETED': {
            return (
                state.map((t) => {
                    if (t.id === action.id) {
                        t.status = 'COMPLETED';
                    }
                    return t;
                })
            );
        }
        case 'TODO': {
            return (
                state.map((t) => {
                    if (t.id === action.id) {
                        t.status = 'TODO';
                    }
                    return t;
                })
            );
        }          
        default: 
            return state;
    }
}

function toggleView(state='ALL', action) {
    return (action.status) ? action.status : state;
}

export default combineReducers({
    tasks: todo,
    view: toggleView
})