function addTask(description) {
    return ({
            type: 'ADD',
            description
        });
}

function toggleView(status) {
    return ({
        type: 'TOGGLE',
        status
    });
}

function completed(id) {
    return ({
        type: 'COMPLETED',
        id
    });
}

function addBack(id) {
    return ({
        type: 'TODO',
        id
    });
}

export default {
    addTask,
    toggleView,
    completed,
    addBack
}