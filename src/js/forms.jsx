import React from 'react';
import ReactDOM from 'react-dom';

// simpleform

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Abdul Muqsith', 
            ta: 'Text ...', 
            fruits: ['none'],
            icecream: 'none',
            isDessert: false,
            dessertTime: 'later'
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleTAChange = this.handleTAChange.bind(this);
        this.selectFruits = this.selectFruits.bind(this);
        this.selectIceCream = this.selectIceCream.bind(this);
        this.handleDessertChange = this.handleDessertChange.bind(this);
        this.handleDessertTime = this.handleDessertTime.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    handleTAChange(event) {
        this.setState({ta: event.target.value});
    }

    handleDessertChange(event) {
        this.setState({isDessert: event.target.checked});
    }

    handleDessertTime(event) {
        this.setState({dessertTime: event.target.value});
    }

    selectFruits(event) {
        let fruit = event.target.value;
        let fruits = this.state.fruits.slice(0);
        let _index = fruits.indexOf(fruit);
        if (!fruits.length) {
            fruits = ['none'];
        } else if (_index !== -1) {
            fruits = [...fruits.slice(0, _index), ...fruits.slice(_index+1)];            
        } else {
            fruits = [...fruits, fruit];
        }
        this.setState({fruits: fruits});
    }

    selectIceCream(event) {
        this.setState({icecream: event.target.value});
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>{this.state.value}</label>
                <br/>
                <label>
                    Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <textarea value={this.state.ta} onChange={this.handleTAChange}>
                </textarea>
                <br/>
                <label>Desert:
                    <input type="checkbox" 
                        onChange={this.handleDessertChange}
                        checked={this.state.isDessert} />
                </label>
                <br/>
                <select disabled={!this.state.isDessert}
                    value={this.state.fruits} 
                    onChange={this.selectFruits} multiple={true}>
                    <option value="none">Select One fruit</option>
                    <option value="banana">Banana</option>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="mango">Mango</option>
                    <option value="pineapple">Pineapple</option>
                    <option value="custard-apple">Custard Apple</option>
                    <option value="sapota">Sapota</option>
                </select>
                <br/>
                <select disabled={!this.state.isDessert}
                    value={this.state.icecream} 
                        onChange={this.selectIceCream}>
                    <option value="none">Select One Ice cream</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="butterscotch">Butter Scotch</option>
                </select>
                <br/>
                <label>
                    When:
                </label> 
                <label>
                    <input name="desserttime" 
                        onChange={this.handleDessertTime}
                        type="radio" value="now" /> Now
                </label>
                <label>
                        <input name="desserttime" 
                        onChange={this.handleDessertTime}
                        type="radio" value="later" />Later
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<NameForm/>, 
        document.querySelector('#simpleform'));