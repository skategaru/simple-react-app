import React from 'react';
import styles from './../css/style.css';
import List from './list.jsx';

class EmpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= { data: [], contact: { firstname: "", lastname:"" } };
    }

    handleChange(item, evt) {
        var contact = this.state.contact;
        contact[item] = evt.target.value;
        this.setState({contact:contact});
    }

    submitForm(evt) {
        evt.preventDefault();
        const currentContact = JSON.parse(JSON.stringify(this.state.contact));
        this.setState({data: [...this.state.data, currentContact]});
        this.setState({contact: { firstname: "", lastname:"" }});
    }

    render() {
        return (
            <div className={styles['form-container']}>
                <form onSubmit={this.submitForm.bind(this)}>
                    <label>First Name</label><br />
                    <input type="text" id="firstname" name="firstname" value={this.state.contact.firstname} onChange={this.handleChange.bind(this, 'firstname')} />
                    <br />
                    <label>Last Name</label>
                    <br />
                    <input type="text" id="lastname" name="lastname" value={this.state.contact.lastname} onChange={this.handleChange.bind(this, 'lastname')} />
                    <br /><br />
                    <input type="submit" />
                </form>

                <List data={this.state.data}/>
                
            </div>
        );
    }
}

export default EmpForm; 
