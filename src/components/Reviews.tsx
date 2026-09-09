// File: src/components/Reviews.tsx

import { REVIEWS } from "../data/constants";
import StarRating from "./StarRating";

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: "80px 1.5rem", background: "#fdf9f2" }}>
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
            Thực Khách Nói Gì
          </div>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#2c1a0e",
            }}
          >
            Đánh Giá Từ Khách Hàng Thực Tế
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              style={{
                background: "#f5f0e8",
                border: "1px solid #e8ddc8",
                borderRadius: 6,
                padding: "32px 28px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontFamily: "'Lora', serif",
                  fontSize: 64,
                  color: "#e8ddc8",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                "
              </div>
              <StarRating count={r.rating} />
              <p
                style={{
                  color: "#5c3d1e",
                  lineHeight: 1.75,
                  margin: "16px 0 24px",
                  fontSize: 15,
                  fontStyle: "italic",
                  fontFamily: "'Lora', serif",
                }}
              >
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#8b2000",
                    color: "#fdf9f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#2c1a0e", fontSize: 15 }}>{r.name}</div>
                  <div style={{ color: "#b8860b", fontSize: 12, fontWeight: 500 }}>{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bảng điểm tổng quan */}
        <div
          style={{
            marginTop: 48,
            background: "#2c1a0e",
            borderRadius: 6,
            padding: "32px 40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 48, fontWeight: 700, color: "#f0c060", lineHeight: 1 }}>
              4.9
            </div>
            <StarRating count={5} />
            <div style={{ color: "#a89070", fontSize: 13, marginTop: 4 }}>Dựa trên 2.400+ đánh giá</div>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Hương vị", val: "98%" },
              { label: "Phục vụ", val: "96%" },
              { label: "Không gian", val: "94%" },
              { label: "Giá cả", val: "97%" },
            ].map((m) => (
              <div key={m.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, color: "#fdf9f2" }}>
                  {m.val}
                </div>
                <div style={{ color: "#7a5c3a", fontSize: 12 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}