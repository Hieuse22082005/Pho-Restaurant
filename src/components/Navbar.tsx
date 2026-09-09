// File: src/components/Navbar.tsx

import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled ? "rgba(44, 26, 14, 0.97)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(184, 134, 11, 0.3)" : "1px solid transparent",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div style={{ maxWidth: 1700, margin: "0 auto", padding: "0 2rem" }}>
        {/* KHUNG FLEX CHIA 3 PHẦN */}
        <div className="flex items-center justify-between" style={{ height: 80 }}>
          
          {/* PHẦN 1: LOGO (Căn trái) */}
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <a href="#home" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: "#8b2000",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontFamily: "'Lora', serif",
                  fontWeight: 700,
                  color: "#fdf9f2",
                  letterSpacing: "-0.5px",
                }}
              >
                Phở
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#fdf9f2",
                    lineHeight: 1.1,
                  }}
                >
                  Phở Gia Truyền
                </div>
                <div style={{ fontSize: 10, color: "#b8860b", letterSpacing: 2, textTransform: "uppercase" }}>
                  Nam Định · 1975
                </div>
              </div>
            </a>
          </div>

          {/* PHẦN 2: MENU (Căn giữa, chữ to hơn) */}
          <nav className="hidden md:flex items-center justify-center gap-10" style={{ flex: 2 }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "#e8ddc8",
                  textDecoration: "none",
                  fontSize: 16, // Chữ to ra (cũ là 14)
                  fontWeight: 500,
                  letterSpacing: 0.5, // Giãn chữ ra một chút cho sang trọng
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#b8860b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e8ddc8")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* PHẦN 3: NÚT BẤM & NÚT MOBILE (Căn phải) */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            {/* Nút bấm Đặt bàn (Desktop) */}
            <a
              href="#reservation"
              className="hidden md:inline-block"
              style={{
                background: "#8b2000",
                color: "#fdf9f2",
                padding: "10px 24px",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: 0.5,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#a52500")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#8b2000")}
            >
              Đặt Bàn Ngay
            </a>

            {/* Nút Hamburger (Mobile) */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#e8ddc8",
                fontSize: 24,
                cursor: "pointer",
                padding: "4px 8px",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              borderTop: "1px solid rgba(184, 134, 11, 0.2)",
              paddingBottom: 16,
              background: isScrolled ? "transparent" : "rgba(44, 26, 14, 0.95)",
              borderRadius: "0 0 8px 8px"
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "#e8ddc8",
                  textDecoration: "none",
                  fontSize: 15,
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ padding: "0 16px" }}>
              <a
                href="#reservation"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  background: "#8b2000",
                  color: "#fdf9f2",
                  padding: "10px 24px",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Đặt Bàn Ngay
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}