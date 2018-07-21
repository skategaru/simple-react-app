import React from 'react';
import styles from './../css/style.scss';

export default (props) => {
    return (
        <div className={styles['form-container']}>
            <form onSubmit={props.data.submitForm.bind(props.data)}>
                <label>First Name</label><br />
                <input type="text" id="firstname" name="firsstname" value={props.data.state.contact.firstName} onChange={props.data.handleChange.bind(props.data, 'firstName')} />
                <br />
                <label>Last Name</label>
                <br />
                <input type="text" id="lastname" name="lastname" value={props.data.state.contact.lastName} onChange={props.data.handleChange.bind(props.data, 'lastName')} />
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}