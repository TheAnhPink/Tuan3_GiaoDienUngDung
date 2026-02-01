import { useState, useRef } from "react";

function Stopwatch() {
  const [thoiGian, setThoiGian] = useState(0); // milliseconds
  const [dangChay, setDangChay] = useState(false);
  const [tenLap, setTenLap] = useState("");
  const [danhSachLap, setDanhSachLap] = useState([]);

  // useRef lưu intervalId
  const intervalRef = useRef(null);

  // useRef để focus input
  const inputRef = useRef(null);

  // Start
  const batDau = () => {
    if (dangChay) return;

    setDangChay(true);
    intervalRef.current = setInterval(() => {
      setThoiGian(t => t + 10);
    }, 10);
  };

  // Pause
  const tamDung = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDangChay(false);
  };

  // Reset
  const datLai = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDangChay(false);
    setThoiGian(0);
    setDanhSachLap([]);
  };

  // Add lap + focus input
  const themLap = () => {
    if (!tenLap.trim()) return;

    setDanhSachLap(ds => [
      ...ds,
      { ten: tenLap, thoiGian }
    ]);
    setTenLap("");

    // focus lại input
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Stopwatch</h2>

      <h3>{thoiGian} ms</h3>

      <button onClick={batDau}>Start</button>
      <button onClick={tamDung}>Pause</button>
      <button onClick={datLai}>Reset</button>

      <hr />

      <input
        ref={inputRef}
        placeholder="Tên vòng (Lap name)"
        value={tenLap}
        onChange={e => setTenLap(e.target.value)}
      />
      <button onClick={themLap}>Add Lap</button>

      <ul>
        {danhSachLap.map((lap, index) => (
          <li key={index}>
            {lap.ten} – {lap.thoiGian} ms
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;
