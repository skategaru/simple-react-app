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


export default {
    focus,
    update
}
