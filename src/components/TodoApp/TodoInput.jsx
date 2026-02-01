function TodoInput({ noiDung, setNoiDung, themTodo }) {
  console.log("render TodoInput");

  return (
    <div>
      <input
        value={noiDung}
        placeholder="Nhập công việc..."
        onChange={e => setNoiDung(e.target.value)}
      />
      <button onClick={themTodo}>Thêm</button>
    </div>
  );
}

export default TodoInput;
