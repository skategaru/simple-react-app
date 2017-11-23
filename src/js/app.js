import '../css/style.css';

import { React } from 'react';

let arr = ['a', 'b', 'c', 'd'];


function printValues(a) {
    document.querySelector('#arrvalues')
    .appendChild(getUnorderedList(arr));
}

function getUnorderedList(ar) {
    return (
        <ul>
            {ar.map(a => {
                return (
                    <li>
                        a
                    </li>
                );
            })}
        </ul>
    );
}


printValues(arr);