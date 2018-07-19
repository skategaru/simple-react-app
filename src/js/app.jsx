import React from 'react';
import styles from './../css/style.css';

class EmpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
        this.state.contact = { firstname: "", lastname:"" };
        this.data = [];
    }

    handleChange(item, evt) {
        var contact = this.state.contact;
        contact[item] = evt.target.value;
        this.setState({contact:contact});
    }

    submitForm(evt) {
        evt.preventDefault();
        const currentContact = JSON.parse(JSON.stringify(this.state.contact));
        this.data.push(currentContact);
        this.state.contact = { firstname: "", lastname:"" };
        this.forceUpdate();
    }

    render() {
        return (
            <div className={styles.formContainer}>
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

                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        {this.data.map(i=>
                            <tr>
                                <td>{i.firstname}</td>
                                <td>{i.lastname}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpForm; 
