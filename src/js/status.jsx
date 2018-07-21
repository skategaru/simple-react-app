import React from 'react';
import styles from './../css/style.scss';

export default (props) => {
    return (
        <div className={styles['list-status']}>
            <span className={styles['status-message']}> {(props.status === 'locked')  ? 'Locked' : 'Active'}</span>
            <span className={(props.status === 'locked')  ? styles['red-dot'] : styles['green-dot']}></span>
        </div>
    )
}