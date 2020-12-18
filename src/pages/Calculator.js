import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperatrue, convert) {
  const input = parseFloat(temperatrue);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatrue: ""
    };
  }

  handleChange = e => {
    this.setState({ temperatrue: e.target.value });
  };

  render() {
    const { temperatrue } = this.state;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperatrue in {scaleNames[scale]}</legend>
        <input value={temperatrue} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
export default Calculator;
