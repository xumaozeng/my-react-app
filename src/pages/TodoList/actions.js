// 定义actions的集合

// 增加
export const addTodo = data => ({
  type: "add-todo",
  data: data
});

// 删除
export const deleteTodo = data => ({
  type: "delete-todo",
  data: data
});