import { useState, useRef } from "react";

function Stopwatch() {
  const [thoiGian, setThoiGian] = useState(0); // milliseconds
  const [dangChay, setDangChay] = useState(false);
  const [tenLap, setTenLap] = useState("");
  const [danhSachLap, setDanhSachLap] = useState([]);

  const intervalRef = useRef(null);

  const inputRef = useRef(null);

  const batDau = () => {
    if (dangChay) return;

    setDangChay(true);
    intervalRef.current = setInterval(() => {
      setThoiGian(t => t + 10);
    }, 10);
  };


  const tamDung = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDangChay(false);
  };

  const datLai = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDangChay(false);
    setThoiGian(0);
    setDanhSachLap([]);
  };

  const themLap = () => {
    if (!tenLap.trim()) return;

    setDanhSachLap(ds => [
      ...ds,
      { ten: tenLap, thoiGian }
    ]);
    setTenLap("");

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
