import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const { theme, doiTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={doiTheme}
      style={{
        padding: "8px 12px",
        border: "none",
        cursor: "pointer",
        background: theme === "light" ? "#2563eb" : "#fbbf24",
        color: "#fff"
      }}
    >
      Đổi theme
    </button>
  );
}

export default Button;
