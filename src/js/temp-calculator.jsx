import React from 'react';
import ReactDOM from 'react-dom';

const scale = {
    c: 'Celcius',
    f: 'Fahrenheit'
};

function BoilingVerdict(props) {
    return (
        <h3 style={{color: (props.temp > 100) ? 'salmon': 'skyblue'}}>The water would {(props.temp > 100) ? 'boil':'not boil'}</h3>
    );
}

function toFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(0);
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value);
    }

    render() {
        let _temp = this.props.temp;
        if (!isNaN(_temp)) {
            if (this.props.scale === 'f') {
                _temp = toFahrenheit(_temp);
            }
        }
        return (
            <fieldset>
                <legend>Enter temperature in {scale[this.props.scale]}</legend>
                <label>Temperature: 
                    <input type="text" onChange={this.handleChange} value={_temp}/>
                </label>
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temp: 0, isvalid: true};
        this.onTempChange = this.onTempChange.bind(this);
    }

    onTempChange(val) {
        this.setState({ temp: val, isvalid: !isNaN(val) });
    }

    render() {
        return (
            <fieldset>
                <legend> Boiling Water Verdict </legend>
                <BoilingVerdict temp={this.state.temp}/>
                <div style={{columns: '2 auto'}}>
                    <TemperatureInput scale="c" onTempChange={this.onTempChange} 
                        temp={this.state.temp}/>
                    <TemperatureInput scale="f" onTempChange={this.onTempChange} 
                        temp={this.state.temp}/>
                </div>
                <h5 style={{color: 'red', display: (this.state.isvalid) ? 'none' : 'block'}}>
                    Invalid input. Please provide a valid input.</h5>
            </fieldset>
        );
    }
}

ReactDOM.render(<Calculator />, document.querySelector('#temp-calculator'));