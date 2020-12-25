import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

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
  handleChange = e => {
    this.props.onTempertureChange(e.target.value);
  };

  render() {
    const { temperatrue } = this.props;
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
  constructor(props) {
    super(props);
    this.state = {
      temperatrue: "",
      scale: "c"
    };
  }

  handleCelsiusChange = temperatrue => {
    this.setState({ scale: "c", temperatrue });
  };

  handleFahrenheitChange = temperatrue => {
    this.setState({ scale: "f", temperatrue });
  };

  render() {
    const { scale, temperatrue } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperatrue, toCelsius) : temperatrue;
    const fahrenheit =
      scale === "c" ? tryConvert(temperatrue, toFahrenheit) : temperatrue;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperatrue={celsius}
          onTempertureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperatrue={fahrenheit}
          onTempertureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
export default Calculator;
