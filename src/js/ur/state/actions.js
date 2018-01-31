function focus(fieldName) {
    return ({
        type: 'FOCUS',
        currentField: fieldName
    });
}

function update(value) {
    return ({
        type: 'UPDATE',
        value
    });
}

function undo() {
    return ({
        type: 'UNDO'
    });
}


function redo() {
    return ({
        type: 'REDO'
    });
}

export {
    focus,
    update,
    undo,
    redo
}
