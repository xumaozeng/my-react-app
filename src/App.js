import React, { Component } from "react";
import { ThemeContext, themes } from "./pages/Context/themeContext";
import ThemedButton from "./pages/Context/ThemedButton";

function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = () => {
      this.setState(state => {
        return {
          theme: state.theme === themes.dark ? themes.light : themes.dark
        };
      });
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
