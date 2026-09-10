// File: src/components/MenuSection.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "../data/constants";

export default function MenuSection() {
  const [activeMenu, setActiveMenu] = useState("pho-bo");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // TRẠNG THÁI PHÂN TRANG
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Đặt 6 món mỗi trang

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeMenu)!;

  // Lấy ra danh sách món chỉ dành riêng cho trang hiện tại
  const totalPages = Math.ceil(activeCategory.items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = activeCategory.items.slice(startIndex, startIndex + itemsPerPage);

  // Hàm chuyển Tab (tự động đưa về trang 1)
  const handleTabChange = (categoryId: string) => {
    setActiveMenu(categoryId);
    setCurrentPage(1); // Click menu khác là về lại trang 1
    setHoveredIndex(null);
  };

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

        {/* Tab chọn danh mục */}
        <div className="flex flex-wrap justify-center" style={{ gap: 8, marginBottom: 40 }}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
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

        {/* HIỂN THỊ CÁC MÓN ĂN THEO TRANG */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
          {currentItems.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative", 
                background: "#fdf9f2",
                border: "1px solid",
                borderColor: hoveredIndex === i ? "#8b2000" : "#e8ddc8",
                borderRadius: 6,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: hoveredIndex === i ? 20 : 1, 
              }}
            >
              <div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 17, color: "#2c1a0e", marginBottom: 4 }}>
                  {item.name}
                </div>
                <div style={{ color: "#7a5c3a", fontSize: 13, lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 18, color: "#8b2000", whiteSpace: "nowrap", flexShrink: 0 }}>
                {item.price}
              </div>

              {/* BẢNG TOOLTIP HOVER (Giữ nguyên hiệu ứng to hoành tráng) */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                    animate={{ opacity: 1, y: -260, x: "-50%", scale: 1 }} 
                    exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      width: 540,
                      background: "#fff",
                      padding: 20,
                      borderRadius: 16,
                      boxShadow: "0 24px 48px rgba(44, 26, 14, 0.25)",
                      zIndex: 50,
                      pointerEvents: "none",
                      display: "flex", 
                      alignItems: "center",
                      gap: 24,
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: 200,
                        height: 200,
                        objectFit: "cover",
                        borderRadius: 10,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 22, color: "#8b2000", marginBottom: 6 }}>
                        {item.name}
                      </div>
                      <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 18, color: "#b8860b", marginBottom: 12 }}>
                        {item.price}
                      </div>
                      <p style={{ color: "#5c3d1e", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                        {item.hoverInfo}
                      </p>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: -8,
                        left: "50%",
                        transform: "translateX(-50%) rotate(45deg)",
                        width: 16,
                        height: 16,
                        background: "#fff",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

        {/* NÚT PHÂN TRANG (PAGINATION) CHỈ HIỆN KHI CÓ NHIỀU HƠN 1 TRANG */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2" style={{ marginTop: 32 }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              style={{
                padding: "6px 12px",
                borderRadius: 4,
                border: "1px solid #d4c4a0",
                background: "transparent",
                color: currentPage === 1 ? "#d4c4a0" : "#5c3d1e",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}
            >
              ←
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: currentPage === index + 1 ? "#8b2000" : "#d4c4a0",
                  background: currentPage === index + 1 ? "#8b2000" : "transparent",
                  color: currentPage === index + 1 ? "#fff" : "#5c3d1e",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              style={{
                padding: "6px 12px",
                borderRadius: 4,
                border: "1px solid #d4c4a0",
                background: "transparent",
                color: currentPage === totalPages ? "#d4c4a0" : "#5c3d1e",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              →
            </button>
          </div>
        )}

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