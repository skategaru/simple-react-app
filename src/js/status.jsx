import React from 'react';
import styles from './../css/style.scss';

import { connect } from 'react-redux';

const StatusComponent = (props) => {
    return (
        <div className={styles['list-status']}>
            <span className={styles['status-message']}> {(props.status === 'locked')  ? 'Locked' : 'Active'}</span>
            <span className={(props.status === 'locked')  ? styles['red-dot'] : styles['green-dot']}></span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const Status = connect(mapStateToProps, mapDispatchToProps)(StatusComponent);

export default Status;