import "./index.css";

function ComposePane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function Contacts() {
  return <h3>Contacts</h3>;
}

function Chat() {
  return <h3>Chat</h3>;
}

function SplitPane() {
  return <ComposePane left={<Contacts />} right={<Chat />} />;
}

export default SplitPane;
