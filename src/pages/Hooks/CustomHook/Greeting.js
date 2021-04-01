import Row from "./Row";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import "./index.css";

function Greeting(props) {
  const name = useInput("xiaoxu");
  const surname = useInput("fangfang");
  const theme = useContext(ThemeContext);
  const width = useWidth();

  useEffect(() => {
    document.title = name.value + "-" + surname.value;
  });

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}

// 自定义width-Hook
function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

// 自定义input-Hook
function useInput(name) {
  const [value, setValue] = useState(name);
  function handleInput(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleInput
  };
}

export default Greeting;
