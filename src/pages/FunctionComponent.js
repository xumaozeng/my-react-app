import React, { useState, useEffect } from "react";

function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // 副作用，相当于componentDidMount、componentDidUpdate、componentWillUnMount的集合
    // console.log("useEffect");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default FunctionComponent;
