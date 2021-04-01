import Row from "./Row";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import "./index.css";

function Greeting(props) {
  const name = useFormInput("xiaoxu");
  const surname = useFormInput("fangfang");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useDocumentTitle(name.value + "-" + surname.value);

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

// 自定义副作用title-Hook
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

// 自定义width-Hook
function useWindowWidth() {
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
function useFormInput(name) {
  const [value, setValue] = useState(name);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

export default Greeting;
