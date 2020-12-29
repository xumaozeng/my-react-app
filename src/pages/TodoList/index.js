import React, { Component } from "react";
import { Button, List, Input } from "antd";
import store from "../../store/todoList";
import { DeleteTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    const { inputValue, data } = this.state;
    return (
      <div className="todo-page">
        <div className="todo-title">
          <p>TODO LIST</p>
          <Input placeholder={inputValue} className="todo-input" />
          <Button type="primary">新增</Button>
        </div>
        <List
          className="todo-list"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[<Button type="text" icon={<DeleteTwoTone />} />]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default TodoList;
