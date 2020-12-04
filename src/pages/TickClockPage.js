import React, { useState, useEffect } from "react";

function TickClockPage(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}
export default TickClockPage;
