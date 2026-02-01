import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 6,
        background: theme === "light" ? "#ffffff" : "#374151"
      }}
    >
      <p>Đây là Card</p>
      <Button />
    </div>
  );
}

export default Card;
