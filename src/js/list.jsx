import React from 'react';

export default (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {props.data.map(i=>
                    <tr key={i}>
                        <td>{i.firstname}</td>
                        <td>{i.lastname}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}