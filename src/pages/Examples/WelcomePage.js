import React from "react";

function WelcomePage(props) {
  return (
    <React.Fragment>
      <p>Hello,{props.name}</p>
      {props.children}
    </React.Fragment>
  );
}
export default WelcomePage;
