import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class WelcomeOthers extends React.Component {
    render() {
        return <h1>Hello, {this.props.class}</h1>;
    }
}

function showMessage() {
    ReactDOM.render(<Welcome name="Abdul Muqsith"/>, 
        document.querySelector('#welcome'));
    ReactDOM.render(<WelcomeOthers class="People" />,
        document.querySelector('#welcome-others'));
}

showMessage();