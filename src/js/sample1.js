
import React from 'react';
import ReactDOM from 'react-dom';


function printValues(a) {
    ReactDOM.render(
        getUnorderedList(a),
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

export default printValues;