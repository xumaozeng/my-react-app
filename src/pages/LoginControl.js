import React, { useState } from "react";
import GreetPage from "./GreetPage";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const button = isLoggedIn ? (
    <LoginButton onClick={() => setIsLoggedIn(false)} />
  ) : (
    <LogoutButton onClick={() => setIsLoggedIn(true)} />
  );
  return (
    <div>
      <GreetPage isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
export default LoginControl;
