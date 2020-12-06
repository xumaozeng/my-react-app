import React, { Component } from "react";

// hoc，高阶组件是个函数，返回值是新的组件

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} omg="omg" />
    </div>
  );
};

function Child(props) {
  return <div>Child</div>;
}

const Foo = foo(foo(Child));

class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
      </div>
    );
  }
}
export default HocPage;
