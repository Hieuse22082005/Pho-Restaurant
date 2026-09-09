// File: src/components/MenuSection.tsx

import { useState } from "react";
import { MENU_CATEGORIES } from "../data/constants";

export default function MenuSection() {
  // Biến trạng thái để lưu tab đang được chọn
  const [activeMenu, setActiveMenu] = useState("pho-nuoc");
  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeMenu)!;

  return (
    <section id="menu" style={{ padding: "80px 1.5rem", background: "#f5f0e8" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              color: "#8b2000",
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Thực Đơn
          </div>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#2c1a0e",
            }}
          >
            Chọn Món Yêu Thích Của Bạn
          </h2>
        </div>

        {/* Category Tabs (Các nút chọn Phở Nước, Phở Trộn...) */}
        <div className="flex flex-wrap justify-center" style={{ gap: 8, marginBottom: 40 }}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveMenu(cat.id)}
              style={{
                padding: "10px 22px",
                borderRadius: 4,
                border: "1px solid",
                borderColor: activeMenu === cat.id ? "#8b2000" : "#d4c4a0",
                background: activeMenu === cat.id ? "#8b2000" : "transparent",
                color: activeMenu === cat.id ? "#fdf9f2" : "#5c3d1e",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid (Danh sách món ăn tương ứng với tab) */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
          {activeCategory.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fdf9f2",
                border: "1px solid #e8ddc8",
                borderRadius: 6,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#8b2000";
                e.currentTarget.style.background = "#fff8f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e8ddc8";
                e.currentTarget.style.background = "#fdf9f2";
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#2c1a0e",
                    marginBottom: 4,
                  }}
                >
                  {item.name}
                </div>
                <div style={{ color: "#7a5c3a", fontSize: 13, lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#8b2000",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ color: "#7a5c3a", fontSize: 13, marginBottom: 20 }}>
            Tất cả các món đều được phục vụ kèm tương hoisin, tương ớt và rau thơm tươi.
          </p>
          <a
            href="#reservation"
            style={{
              display: "inline-block",
              background: "#2c1a0e",
              color: "#fdf9f2",
              padding: "13px 32px",
              borderRadius: 4,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 0.5,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#5c3d1e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2c1a0e")}
          >
            Đặt Bàn Để Thưởng Thức →
          </a>
        </div>
      </div>
    </section>
  );
}