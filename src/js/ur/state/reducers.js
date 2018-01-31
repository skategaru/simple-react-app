function updateField(state = {}, action) {
    switch(action.type) {
        case 'FOCUS':
            return ({ ...state,
                currentField: action.currentField});
        case 'UPDATE': {
            if (state && state.currentField) {
                return ({ ...state, [state.currentField]: action.value});
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}

export default updateField;
