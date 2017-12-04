import React from 'react';
import ReactDOM from 'react-dom';

import { ACTIONS, store } from './redux/crux.js';

class Crux extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
        this.state = { counter: 0 };
        this.unsubscribe = this.unsubscribe.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    subscribe() {
        let unsubscribe = store.subscribe(this.updateCounter);
        this.setState({ unsubscribe });
    }

    unsubscribe() {
        this.state.unsubscribe(this.updateCounter);
    }

    updateCounter() {
        this.setState({ counter: store.getState() });
    }

    increment() {
        store.dispatch({type: ACTIONS.INCREMENT});
    }

    decrement() {
        store.dispatch({type: ACTIONS.DECREMENT});
    }

    render() {
        return (
            <div>
                <button onClick={this.subscribe}>Subscribe</button>
                <button onClick={this.increment}>Increment + </button>
                <button onClick={this.decrement}>Decrement - </button>
                <span>{this.state.counter}</span>
                <button onClick={this.unsubscribe}>Unsuscribe</button>
            </div>
        );
    }
}

ReactDOM.render(<Crux />, document.querySelector('#crux'));