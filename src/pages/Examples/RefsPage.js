import React, { Component, useRef } from "react";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.ageInput = React.createRef();
  }

  focusTextInput = () => {
    // 直接使用原生API使text输入框获得焦点
    this.textInput.current.focus();
  };

  onChange = e => {
    console.log(e.target.value);
  };

  render() {
    const AgeWithRef = React.forwardRef(AgeInput);
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <AgeWithRef label="年龄" ref={this.ageInput} onChange={this.onChange} />
        <CityInput label="城市" />
      </div>
    );
  }
}

// forwardRef转发
function AgeInput(props, ref) {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input type="text" ref={ref} onChange={props.onChange} />
    </div>
  );
}

// hooks
function CityInput(props) {
  const cityInputRef = useRef(null);

  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input type="text" ref={cityInputRef} />
      <button
        onClick={() => {
          let val = cityInputRef.current.value;
          console.log("city", val);
        }}
      >
        click
      </button>
    </div>
  );
}

class RefsPage extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    // console.log(this.textInput.current);
    this.textInput.current.focusTextInput();
  }
  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

export default RefsPage;
