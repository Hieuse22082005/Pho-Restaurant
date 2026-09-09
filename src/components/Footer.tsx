// File: src/components/Footer.tsx

import { NAV_LINKS } from "../data/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#1a0e06", padding: "40px 1.5rem 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 40, marginBottom: 40 }}>
          <div>
            <div
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#fdf9f2",
                marginBottom: 8,
              }}
            >
              Phở Gia Truyền
            </div>
            <div style={{ fontSize: 11, color: "#b8860b", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>
              Nam Định · 1975
            </div>
            <p style={{ color: "#7a5c3a", fontSize: 13, lineHeight: 1.7 }}>
              Giữ gìn hương vị phở truyền thống Hà Nội qua gần 50 năm với bí quyết
              nước dùng hầm 12 tiếng không ngừng nghỉ.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#fdf9f2", marginBottom: 16, fontSize: 14, letterSpacing: 1 }}>
              ĐIỀU HƯỚNG
            </div>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  color: "#7a5c3a",
                  textDecoration: "none",
                  fontSize: 14,
                  marginBottom: 8,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#b8860b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7a5c3a")}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#fdf9f2", marginBottom: 16, fontSize: 14, letterSpacing: 1 }}>
              GIỜ MỞ CỬA
            </div>
            {[
              { day: "Thứ Hai – Thứ Sáu", time: "6:00 – 14:00 & 18:00 – 22:00" },
              { day: "Thứ Bảy", time: "6:00 – 15:00 & 17:00 – 22:00" },
              { day: "Chủ Nhật", time: "6:00 – 14:00" },
            ].map((h) => (
              <div key={h.day} style={{ marginBottom: 12 }}>
                <div style={{ color: "#b8860b", fontSize: 12, fontWeight: 600 }}>{h.day}</div>
                <div style={{ color: "#7a5c3a", fontSize: 13 }}>{h.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ color: "#3a2010", fontSize: 12 }}>
            © 2026 Phở Gia Truyền Nam Định. Bảo lưu mọi quyền.
          </div>
          <div style={{ color: "#3a2010", fontSize: 12 }}>
            Thiết kế với ❤️ cho ẩm thực Việt Nam
          </div>
        </div>
      </div>
    </footer>
  );
}