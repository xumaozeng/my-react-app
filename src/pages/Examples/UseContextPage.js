import React, { createContext, useContext } from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
};

const ThemeContext = createContext(themes.light);

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground
      }}
    >
      I am styled by theme context!
    </button>
  );
}

function UseContextPage() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
export default UseContextPage;
