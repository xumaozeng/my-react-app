import React, { useState, useEffect, useCallback } from "react";

// 自定义hooks
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return size;
}

function UserHookPage() {
  const size = useWinSize();
  return (
    <div>
      <div>
        页面Size:{size.width}*{size.height}
      </div>
    </div>
  );
}

export default UserHookPage;
