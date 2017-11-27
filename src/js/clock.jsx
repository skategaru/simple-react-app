import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

/*
function Clock(props) {
    return <h3>{props.date.toString()}</h3>
}
*/

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() , format: 'hh:mm:ss a, Do MMM YYYY'};

        this.handleClick = this.handleClick.bind(this);
        this.formats = [
            'hh:mm:ss a, Do MMM YYYY',
            'Do MMMM, YYYY',
            'DD-MM-YYYY HH:mm:ss.zzz'
        ];
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick() , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleClick(id, e) {
        console.log(id, e);
        let _format = this.formats[Math.floor(Math.random()*this.formats.length)];
        this.setState({format: _format});
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        let _date = moment(this.state.date).format(this.state.format);
        return <h3 id="clock_h3_element" onClick={this.handleClick.bind(null, 'clock_h3_element')}>{_date}</h3>
    }
}


function showClock() {
    ReactDOM.render(
        <Clock />,
        document.querySelector('#clock')
    );
}

showClock();