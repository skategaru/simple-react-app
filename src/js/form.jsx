import React from 'react';

import { connect } from 'react-redux';
import { addContact } from './redux/actions';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: "", lastName: ""};
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(evt) {
        const target = evt.currentTarget;
        this.setState({[target.name]: target.value});
    }

    submitForm(evt) {
        evt.preventDefault();
        this.props.addContact({...this.state});
        this.setState({ firstName: "", lastName:"" });
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>First Name</label><br />
                <input type="text"
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} />
                <br />
                <label>Last Name</label>
                <br />
                <input type="text"
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} />
                <br /><br />
                <input type="submit" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return ({
        addContact: (contact) => { dispatch(addContact(contact)); }
    });
};

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);

export default Form;