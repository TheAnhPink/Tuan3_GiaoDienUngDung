import { useState, useCallback } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import './TodoApp.css'

function TodoApp() {
  const [danhSachTodo, setDanhSachTodo] = useState(() =>
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      ten: "Công việc " + i,
      hoanThanh: false
    }))
  );

  const [noiDung, setNoiDung] = useState("");

  const themTodo = () => {
    if (!noiDung.trim()) return;
    setDanhSachTodo(ds => [
      ...ds,
      { id: Date.now(), ten: noiDung, hoanThanh: false }
    ]);
    setNoiDung("");
  };

  const doiTrangThai = useCallback((id) => {
    setDanhSachTodo(ds =>
      ds.map(todo =>
        todo.id === id
          ? { ...todo, hoanThanh: !todo.hoanThanh }
          : todo
      )
    );
  }, []);

  const xoaTodo = useCallback((id) => {
    setDanhSachTodo(ds => ds.filter(todo => todo.id !== id));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List Performance</h2>

      <TodoInput
        noiDung={noiDung}
        setNoiDung={setNoiDung}
        themTodo={themTodo}
      />

      <TodoList
        danhSachTodo={danhSachTodo}
        onToggle={doiTrangThai}
        onDelete={xoaTodo}
      />
    </div>
  );
}

export default TodoApp;
