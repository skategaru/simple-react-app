import React from 'react';
import styles from './../css/style.scss';
import Form from './form.jsx';
import List from './list.jsx';


/**
    Joining Redux with React


    Redux has 2 things 
        1. Action
        2. Store


    React has 2 things
        1. User events
        2. Component State


Notes: React renders a component whenver thre is a change in the state of the component.
    When Uer does some action like button click, scroll, typing in the text field browser gernerates events
    for these now these events are to be taken and propagated as redux actions and then the reducer will
    update our store and the updated state of store is reflected back by our react component. Hence we need
    2 joinning points for our react and redux.


Joining points:
1. map state(redux store) to props (joining of our react component state to our redux store)
2. map dispatch to props. (joining of our react component's events to our redux actions).

 */


 /** 
class EmpForm extends React.Component {
    constructor(props) {
        super(props);
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

*/
export default (props) => {
    return (
        <div className={styles['container']}>
            <Form />
            <List />
        </div>
    );
}; 
