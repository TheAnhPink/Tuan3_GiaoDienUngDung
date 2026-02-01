import React from "react";

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  console.log("render item", todo.id);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.hoanThanh}
        onChange={() => onToggle(todo.id)}
      />
      {todo.ten}
      <button onClick={() => onDelete(todo.id)}>Xóa</button>
    </li>
  );
});

export default TodoItem;
