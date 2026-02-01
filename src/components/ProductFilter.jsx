import { useState, useMemo } from "react";
import "./ProductFilter.css";

function ProductFilter() {
  // Mock 3000 sản phẩm
  const danhSachSanPham = useMemo(() => {
    return Array.from({ length: 3000 }, (_, i) => ({
      id: i,
      ten: "Sản phẩm " + i,
      gia: Math.floor(Math.random() * 1000) + 1
    }));
  }, []);

  const [tuKhoa, setTuKhoa] = useState("");
  const [giaMin, setGiaMin] = useState(0);
  const [giaMax, setGiaMax] = useState(1000);

  // lọc, tìm kím
  console.time("Lọc sản phẩm (useMemo)");
  const danhSachLoc = useMemo(() => {
    return danhSachSanPham.filter(sp =>
      sp.ten.toLowerCase().includes(tuKhoa.toLowerCase()) &&
      sp.gia >= giaMin &&
      sp.gia <= giaMax
    );
  }, [danhSachSanPham, tuKhoa, giaMin, giaMax]);
  console.timeEnd("Lọc sản phẩm (useMemo)");

  // tông tièn
  console.time("Tổng tiền (useMemo)");
  const tongTien = useMemo(() => {
    return danhSachLoc.reduce((tong, sp) => tong + sp.gia, 0);
  }, [danhSachLoc]);
  console.timeEnd("Tổng tiền (useMemo)");

  return (
    <div className="product-filter">
      <h2>Lọc sản phẩm + Tổng tiền</h2>

      <div className="controls">
        <input
          placeholder="Tìm theo tên sản phẩm..."
          value={tuKhoa}
          onChange={e => setTuKhoa(e.target.value)}
        />

        <input
          type="number"
          placeholder="Giá thấp nhất"
          value={giaMin}
          onChange={e => setGiaMin(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Giá cao nhất"
          value={giaMax}
          onChange={e => setGiaMax(Number(e.target.value))}
        />
      </div>

      <p>Số lượng sản phẩm: {danhSachLoc.length}</p>
      <p>Tổng tiền: {tongTien}</p>

      <ul>
        {danhSachLoc.slice(0, 10).map(sp => (
          <li key={sp.id}>
            {sp.ten} – {sp.gia} VNĐ
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
