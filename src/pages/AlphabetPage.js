import React, { Component } from "react";

const A = 65; // ASCII character code
class AlphabetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick = e => {
    console.log(e.target.dataset);
    this.setState({ justClicked: e.target.dataset.letter });
  };

  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter => (
            <li key={letter} data-letter={letter} onClick={this.handleClick}>
              {letter}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default AlphabetPage;
