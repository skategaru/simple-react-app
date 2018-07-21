import React from 'react';

export default (props) => {
    return (
        <form onSubmit={props.data.submitForm.bind(props.data)}>
            <label>First Name</label><br />
            <input type="text" id="firstname" name="firsstname" value={props.data.state.contact.firstname} onChange={props.data.handleChange.bind(props.data, 'firstname')} />
            <br />
            <label>Last Name</label>
            <br />
            <input type="text" id="lastname" name="lastname" value={props.data.state.contact.lastname} onChange={props.data.handleChange.bind(props.data, 'lastname')} />
            <br /><br />
            <input type="submit" />
        </form>
    )
}