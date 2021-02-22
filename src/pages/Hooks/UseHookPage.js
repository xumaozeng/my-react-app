// 自定义hooks

import { useCallback, useEffect, useState } from "react";

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = useCallback(
    () =>
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line
  }, []);

  return size;
}

function UseHookPage(props) {
  const size = useWinSize();
  return (
    <div>
      <h5>UseHookPage</h5>
      页面Size：{size.width}X{size.height}
    </div>
  );
}

export default UseHookPage;
