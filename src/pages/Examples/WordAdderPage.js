import React, { Component, PureComponent } from "react";

class ListOfWords extends PureComponent {
  render() {
    return <div>{this.props.words.join(",")}</div>;
  }
}

class WordAdderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["marklar"]
    };
  }

  handleClick = () => {
    this.setState(state => ({
      words: [...state.words, "hh"]
    }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleClick}>add</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
export default WordAdderPage;
