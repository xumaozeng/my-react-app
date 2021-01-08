import React, { Component } from "react";
import { Button, List, Input } from "antd";
import store from "../../store/todoList";
import { DeleteTwoTone } from "@ant-design/icons";
import { addTodo, deleteTodo } from "./actions";
import "antd/dist/antd.css";
import "./index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleClick = () => {
    store.dispatch(addTodo(this.state.value));
    this.setState({ value: "" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handDelete = index => {
    // 延迟一秒后删除
    setTimeout(() => {
      console.log(index);
      store.dispatch(deleteTodo(index));
    }, 1000);
  };

  render() {
    const { inputValue, data } = store.getState();
    return (
      <div className="todo-page">
        <div className="todo-title">
          <p>TODO LIST</p>
          <Input
            placeholder={inputValue}
            value={this.state.value}
            className="todo-input"
            onChange={this.handleChange}
            onPressEnter={this.handleClick}
          />
          <Button type="primary" onClick={this.handleClick}>
            新增
          </Button>
        </div>
        <List
          className="todo-list"
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button
                  type="text"
                  icon={<DeleteTwoTone />}
                  onClick={() => this.handDelete(index)}
                />
              ]}
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
