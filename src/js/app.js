import '../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

let arr = ['a', 'b', 'c', 'd'];


function printValues(a) {
    ReactDOM.render(
        getUnorderedList(arr),
        document.querySelector('#arrvalues')
    )
}

function getUnorderedList(ar) {
    let i = 0;
    return (
        <ul>
            {ar.map(a => {
                i+=1;
                return (
                    <li key={i}>
                        {a}
                    </li>
                );
            })}
        </ul>
    );
}


printValues(arr);