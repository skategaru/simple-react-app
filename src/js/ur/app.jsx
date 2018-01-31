import React from 'react';

import { connect } from 'react-redux';

import { focus, update, undo, redo } from './state/actions';

class _App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '', lname: '',
            email: '', phone: '',
            subject: '', message: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(
            {[this.props.currentField] : event.target.value},
            () => {
                this.props.handleUpdate(this.state[this.props.currentField]);
            }
        );
    }

    componentDidMount() {
        this.setState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="float-left" onClick={ (e) => { this.props.handleUndo(); } }>Undo</button>
                    </div>
                    <div className="col-md-6">
                        <button className="float-right" onClick={ (e) => { this.props.handleRedo(); } }>Redo</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <fieldset>
                            <legend>Contact form: </legend>
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="fname" className="col-sm-2 col-form-label">First name:</label>
                                    <div className="col-sm-10">
                                        <input type="text"
                                            value={this.state.fname}
                                            onChange={ this.handleChange }
                                            onFocus={(e) => { this.props.handleOnFocus('fname'); }}
                                            autoFocus={this.props.currentField === 'fname'}
                                            className="form-control" id="fname" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="lname" className="col-sm-2 col-form-label">Last name:</label>
                                    <div className="col-sm-10">
                                        <input type="text"
                                                value={this.state.lname}
                                                onChange={ this.handleChange }
                                                onFocus={(e) => { this.props.handleOnFocus('lname'); }}
                                                autoFocus={this.props.currentField === 'lname'}
                                                className="form-control" id="lname" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                                    <div className="col-sm-10">
                                        <input type="email"
                                            value={this.state.email}
                                            onChange={ this.handleChange }
                                            onFocus={(e) => { this.props.handleOnFocus('email'); }}
                                            autoFocus={this.props.currentField === 'email'}
                                            className="form-control" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
                                    <div className="col-sm-10">
                                        <input type="tel"
                                            value={this.state.phone}
                                            onChange={ this.handleChange }
                                            onFocus={(e) => { this.props.handleOnFocus('phone'); }}
                                            autoFocus={this.props.currentField === 'phone'}
                                            className="form-control" id="phone" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="subject" className="col-sm-2 col-form-label">Subject:</label>
                                    <div className="col-sm-10">
                                        <input type="text"
                                            value={this.state.subject}
                                            onChange={ this.handleChange }
                                            onFocus={(e) => { this.props.handleOnFocus('subject'); }}
                                            autoFocus={this.props.currentField === 'subject'}
                                            className="form-control" id="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="message" className="col-sm-2 col-form-label">Message:</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            value={this.state.message}
                                            onChange={ this.handleChange }
                                            onFocus={(e) => { this.props.handleOnFocus('message'); }}
                                            autoFocus={this.props.currentField === 'message'}
                                            className="form-control" id="message"></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <span>&nbsp;</span>
                                    <button className="btn btn-primary">Submit</button>
                                    <span>&nbsp;</span>
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return ({
        handleOnFocus: function(fieldName) {
            dispatch(focus(fieldName));
        },
        handleUpdate: function(value) {
            dispatch(update(value));
        },
        handleUndo: function() {
            dispatch(undo());
        },
        handleRedo: function() {
            dispatch(redo());
        }
    })
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
