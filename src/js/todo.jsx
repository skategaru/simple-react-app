import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import styles from '../css/style.css';

import store from './redux/todoapp/store';
import actions from './redux/todoapp/actions';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleInputFieldChange(e) {
        this.setState({value: e.target.value});
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.props.handleInputFieldChange(this.state.value);
        }
    }

    render() {
        return (
            <div>
                <label>
                    Task: 
                    <input onChange={this.handleInputFieldChange} 
                        onKeyUp={this.handleKeyUp}
                        value={this.state.value}
                        type="text"/>
                </label>
                <button 
                    onClick={ (e) => { this.props.handleAddButtonClick(this.state.value); } }>
                    Add</button>
            </div>
        );
    }    
}

function TasksToggle(props) {
    return (
        <div>
            <label>
                <input onChange={props.handleRadioButtonChange}
                    value="ALL" type="radio" name="taskstatus" 
                    checked={(props.view === 'ALL')}/>
                All
            </label>
            <label>
                <input onChange={props.handleRadioButtonChange}
                    value="TODO" type="radio" name="taskstatus"
                    checked={(props.view === 'TODO')} />
                Todo
            </label>
            <label>
                <input onChange={props.handleRadioButtonChange}
                    value="COMPLETED" type="radio" name="taskstatus" 
                    checked={(props.view === 'COMPLETED')} />
                Completed
            </label>
        </div>
    );
}

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: (this.props.task.status === 'COMPLETED') };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({checked: !this.state.checked});
        this.props.handleCheckbox(this.state.checked, this.props.task.id);
    }

    render() {
        return (
            <li>
                <label>
                    <input type="checkbox"
                        onChange={this.handleChange} 
                        checked={this.state.checked}/>
                    <span className={(this.state.checked) ? styles.striketask : ''}>
                        {this.props.task.description}
                    </span>
                </label>
            </li>
        );
    }    
}


function TaskList(props) {
    return (
        <ul>
            {(props.tasks) ?
                props.tasks
                .filter((t) => {
                    return (t.status === props.view || props.view === 'ALL')
                })
                .map((t) => {
                    return (
                        <Task key={t.id} 
                            task={t} 
                            handleCheckbox={props.handleCheckbox}/>
                    )
                }) : null
            }
        </ul>
    );
}

function Todo(props) {
    return (
        <div>
            <TaskInput 
                handleAddButtonClick={props.handleAddButtonClick}
                handleInputFieldChange={props.handleInputFieldChange}/>
            <TasksToggle 
                handleRadioButtonChange={props.handleRadioButtonChange} 
                view={props.view}/>
            <TaskList 
                view = {props.view}
                handleCheckbox={props.handleCheckbox}
                tasks={props.tasks}/>
        </div>
    );
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return ({
        handleRadioButtonChange: function(e) {
            dispatch(actions.toggleView(e.target.value));
        },
        handleInputFieldChange: function(desc) {
            dispatch(actions.addTask(desc))
        },
        handleAddButtonClick: function(desc) {
            dispatch(actions.addTask(desc))
        },
        handleCheckbox: function(checked, id) {
            if (checked) {
                dispatch(actions.addBack(id));
            } else {
                dispatch(actions.completed(id))
            }
        }
    });
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

ReactDOM.render(
    <Provider store={store}>
        <TodoContainer />
    </Provider>, 
    document.querySelector('#todo'));