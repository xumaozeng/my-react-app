import { useRef } from "react";

function FileInputPage(props) {
  const fileInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(fileInput.current.files[0].name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default FileInputPage;
