import React from 'react';
import { connect } from 'react-redux';

import Status from './status.jsx';
import styles from './../css/style.scss';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['list-container']}>
                <div className={styles['table-div']}>
                    <table>
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                            {this.props.data.map((i, index) =>
                                <tr key={index}>
                                    <td>{i.firstName}</td>
                                    <td>{i.lastName}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Status />
            </div>

        );
    }
};


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);

export default List;