import React, { Fragment } from "react";

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

const items = [
  {
    id: 1,
    term: "JS",
    description: "学习Javascript"
  },
  {
    id: 2,
    term: "Python",
    description: "学习Python"
  }
];
function GlossaryPage(props) {
  return (
    <div>
      <h3>GlossaryPage</h3>
      <Glossary items={items} />
    </div>
  );
}
export default GlossaryPage;
