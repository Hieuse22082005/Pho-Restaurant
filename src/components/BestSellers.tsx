// File: src/components/BestSellers.tsx

import { BEST_SELLERS } from "../data/constants";

export default function BestSellers() {
  return (
    <section style={{ padding: "80px 1.5rem", background: "#f5f0e8" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Đặc Sản Nhà Hàng
          </div>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#2c1a0e",
              marginBottom: 14,
            }}
          >
            Những Bát Phở Được Yêu Thích Nhất
          </h2>
          <p style={{ color: "#7a5c3a", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Được chọn lọc từ hàng nghìn lượt đánh giá của thực khách suốt gần 50 năm qua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
          {BEST_SELLERS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fdf9f2",
                borderRadius: 6,
                overflow: "hidden",
                border: "1px solid #e8ddc8",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(44,26,14,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "relative", height: 220, background: "#e8ddc8" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "#8b2000",
                    color: "#fdf9f2",
                    padding: "4px 10px",
                    borderRadius: 2,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.tag}
                </div>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <h3
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#2c1a0e",
                    marginBottom: 8,
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ color: "#7a5c3a", fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#8b2000",
                    }}
                  >
                    {item.price}
                  </span>
                  <a
                    href="#menu"
                    style={{
                      fontSize: 13,
                      color: "#5c3d1e",
                      textDecoration: "none",
                      fontWeight: 500,
                      borderBottom: "1px solid #d4c4a0",
                      paddingBottom: 1,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#8b2000";
                      e.currentTarget.style.borderColor = "#8b2000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#5c3d1e";
                      e.currentTarget.style.borderColor = "#d4c4a0";
                    }}
                  >
                    Xem thực đơn →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}