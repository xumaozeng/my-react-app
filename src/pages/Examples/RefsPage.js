import React, { Component } from "react";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    // 直接使用原生API使text输入框获得焦点
    this.textInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class RefsPage extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    console.log(this.textInput.current);
    this.textInput.current.focusTextInput();
  }
  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

// eslint-disable-next-line
function logProps(Component) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }
    render() {
      const { forwardedRef, ...rest } = this.props;
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export default RefsPage;
