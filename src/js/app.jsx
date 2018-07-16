import React from 'react';
import styles from '../css/style.css'

export default () => {
    return <h1 className={((Math.random()*10) > 5 ) ? styles.titleRed : styles.titleGreen}>Hello World</h1>;
}