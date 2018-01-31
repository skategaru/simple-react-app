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
        case 'UNDO': {
            let _s = window._stck.undo();
            if (_s) return _s;
            else return state;
        }
        case 'REDO': {
            let _s = window._stck.redo();
            if (_s) return _s;
            else return state;
        }
        default:
            return state;
    }
}

export default updateField;
