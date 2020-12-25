import React from "react";

function UserGreet(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreet(props) {
  return <h1>Please sign up.</h1>;
}

function GreetPage(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreet />;
  }
  return <GuestGreet />;
}
export default GreetPage;
