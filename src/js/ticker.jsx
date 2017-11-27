
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    let _Time = () => [
        <span key="label">Current Time: </span>,
        <span key="time">{(new Date()).toString()}</span>
    ];
    ReactDOM.render(<_Time/>, document.querySelector('#ticker'));
}

/*
    function tick() {
        let _time = <span>Current Time: {(new Date()).toLocaleTimeString()}</span> ;
        ReactDOM.render(_time, document.querySelector('#ticker'));
    }
*/

setInterval(tick, 1000);