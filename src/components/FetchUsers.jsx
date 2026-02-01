import { useReducer } from "react";

const trangThaiBanDau = {
  trangThai: "idle",
  danhSachUser: [],
  loi: null
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        trangThai: "loading",
        loi: null
      };

    case "FETCH_SUCCESS":
      return {
        trangThai: "success",
        danhSachUser: action.payload,
        loi: null
      };

    case "FETCH_ERROR":
      return {
        trangThai: "error",
        danhSachUser: [],
        loi: action.payload
      };

    default:
      return state;
  }
}

function FetchUsers() {
  const [state, dispatch] = useReducer(reducer, trangThaiBanDau);

  const layDanhSachUser = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!res.ok) throw new Error("Lỗi khi tải dữ liệu");

      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message
      });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Fetch Users - State Machine</h2>

      {state.trangThai === "idle" && (
        <button onClick={layDanhSachUser}>
          Fetch Users
        </button>
      )}

      {state.trangThai === "loading" && (
        <p>Đang tải dữ liệu...</p>
      )}

      {state.trangThai === "error" && (
        <>
          <p style={{ color: "red" }}>
            Lỗi: {state.loi}
          </p>
          <button onClick={layDanhSachUser}>
            Retry
          </button>
        </>
      )}

      {state.trangThai === "success" && (
        <ul>
          {state.danhSachUser.map(user => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchUsers;
