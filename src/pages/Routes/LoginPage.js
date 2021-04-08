import React, { useEffect } from "react";

function LoginPage(props) {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div>
      <h3>LoginPage</h3>
    </div>
  );
}
export default LoginPage;
