function DlPage(props) {
  const { dlData, name, openName, changeOpen } = props;
  return (
    <div className={"friend-group " + (openName === name ? "expanded" : "")}>
      <dt onClick={() => changeOpen(openName === name ? "" : name)}>
        {dlData.title}
      </dt>
      {dlData.list.map((item, index) => (
        <dd key={index}>{item.name}</dd>
      ))}
    </div>
  );
}
export default DlPage;
