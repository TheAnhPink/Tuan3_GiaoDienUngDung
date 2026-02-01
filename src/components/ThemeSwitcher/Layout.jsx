import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Card from "./Card";

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 20,
        background: theme === "light" ? "#f9f9f9" : "#1f2933",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      <h2>Theme Switcher</h2>
      <Card />
    </div>
  );
}

export default Layout;
