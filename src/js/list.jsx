import React from 'react';
import Status from './status.jsx';
import styles from './../css/style.scss';

export default (props) => {
    return (
        <div className={styles['list-container']}>
            <div className={styles['table-div']}>
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        {props.data.data.map((i, index) =>
                            <tr key={index}>
                                <td>{i.firstName}</td>
                                <td>{i.lastName}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Status status={props.data.status} />
        </div>
    )
}