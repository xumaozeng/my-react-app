function Row(props) {
  const { label, children } = props;
  return (
    <>
      <h3>{label}</h3>
      <p>{children}</p>
    </>
  );
}

export default Row;
