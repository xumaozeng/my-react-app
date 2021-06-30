import { useEffect, useState } from "react";

function UseEffectPage(props) {
  const [, setState] = useState(true);

  useEffect(
    () => {
      setState(false);
      setState(true);
      setState(false);
      setState(true);
    },
    // eslint-disable-next-line
    []
  );
  console.log(1);
  return (
    <div>
      <h3>UseEffectPage</h3>
    </div>
  );
}
export default UseEffectPage;
