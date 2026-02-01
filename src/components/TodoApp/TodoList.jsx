import TodoItem from "./TodoItem";

function TodoList({ danhSachTodo, onToggle, onDelete }) {
  console.log("render TodoList");

  return (
    <ul>
      {danhSachTodo.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
