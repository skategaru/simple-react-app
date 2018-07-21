import React from 'react';
import styles from './../css/style.css';
import Form from './form.jsx';
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
                <Form data={this} />
                <List data={this.state.data}/>
            </div>
        );
    }
}

export default EmpForm; 
