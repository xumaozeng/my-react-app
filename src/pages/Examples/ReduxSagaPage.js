import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import "antd/dist/antd.css";

function ReduxSagaPage(props) {
  const { counter, dispatch } = props;
  // add
  const handleAdd = () => {
    dispatch({ type: "ADD" });
  };

  // minus
  const handleMinus = () => {
    dispatch({ type: "MINUS" });
  };

  // async
  const handleAsync = () => {
    dispatch({ type: "ADD_ASYNC" });
  };

  return (
    <div>
      <Button type="primary" onClick={handleAdd}>
        add
      </Button>{" "}
      <Button type="primary" onClick={handleMinus}>
        minus
      </Button>{" "}
      <Button type="primary" onClick={handleAsync}>
        async-add
      </Button>
      <hr />
      计数器：{counter}
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state
});
export default connect(mapStateToProps)(ReduxSagaPage);
