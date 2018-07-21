import React from 'react';
import styles from './../css/style.scss';
import Form from './form.jsx';
import List from './list.jsx';

class EmpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= { status: 'active', data: [], contact: { firstName: "", lastName:"" } };
    }

    handleChange(item, evt) {
        var contact = this.state.contact;
        contact[item] = evt.target.value;
        this.setState({contact:contact});
        if (!this.state.contact.firstName && !this.state.contact.lastName) {
            this.setState({status: 'active'});
        } else {
            this.setState({status: 'locked'});
        }

    }

    submitForm(evt) {
        evt.preventDefault();
        const currentContact = JSON.parse(JSON.stringify(this.state.contact));
        this.setState({data: [...this.state.data, currentContact]});
        this.setState({contact: { firstName: "", lastName:"" }});
        this.setState({status: 'active'});
    }

    render() {
        return (
            <div className={styles['container']}>
                <Form data={this} />
                <List data={{data: this.state.data, status : this.state.status}}/>
            </div>
        );
    }
}

export default EmpForm; 
