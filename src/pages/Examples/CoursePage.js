import { useEffect, useRef, useState } from "react";

function CoursePage() {
  const [course, setCource] = useState("Web高级工程师");
  const [num, setNum] = useState(1);

  let prevCourse = useRef(course);
  let prevNum = useRef(num);

  useEffect(() => {
    console.log("组件挂载阶段");
    return () => {
      console.log("组件卸载阶段");
    };
  }, []);

  useEffect(() => {
    if (course !== prevCourse.current || num !== prevNum.current) {
      console.log("组件更新");
      prevCourse.current = course;
      prevNum.current = num;
    }
  }, [course, num]);
  return (
    <>
      <div>
        选择课程：
        <select
          value={course}
          onChange={({ target }) => {
            setCource(target.value);
          }}
        >
          <option value="Web全栈工程师">Web全栈工程师</option>
          <option value="Web高级工程师">Web高级工程师</option>
        </select>
      </div>
      <div>
        购买数量：
        <input
          type="number"
          value={num}
          min={1}
          onChange={({ target }) => {
            setNum(target.value);
          }}
        />
      </div>
    </>
  );
}
export default CoursePage;
