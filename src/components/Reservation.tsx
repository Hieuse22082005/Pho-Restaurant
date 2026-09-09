// File: src/components/Reservation.tsx

import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", note: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Giả lập việc gửi dữ liệu lên server, sau 4 giây hiện lại form
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", date: "", time: "", guests: "2", note: "" });
  }

  return (
    <section id="reservation" style={{ padding: "80px 1.5rem", background: "#f5f0e8" }}>
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
            Đặt Bàn & Liên Hệ
          </div>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#2c1a0e",
            }}
          >
            Giữ Chỗ Ngay Hôm Nay
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 48, alignItems: "start" }}>
          {/* Form */}
          <div
            style={{
              background: "#fdf9f2",
              border: "1px solid #e8ddc8",
              borderRadius: 6,
              padding: "36px 32px",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: "#2c1a0e", marginBottom: 8 }}>
                  Đặt Bàn Thành Công!
                </h3>
                <p style={{ color: "#7a5c3a" }}>Chúng tôi sẽ liên hệ xác nhận trong vòng 15 phút.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1" style={{ gap: 18 }}>
                  {[
                    { label: "Họ và tên *", key: "name", type: "text", placeholder: "Nguyễn Văn A" },
                    { label: "Số điện thoại *", key: "phone", type: "tel", placeholder: "0901 234 567" },
                  ].map((field) => (
                    <label key={field.key} style={{ display: "block" }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#5c3d1e", display: "block", marginBottom: 6 }}>
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        required
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          border: "1px solid #d4c4a0",
                          borderRadius: 4,
                          fontSize: 15,
                          background: "#f5f0e8",
                          color: "#2c1a0e",
                          outline: "none",
                          boxSizing: "border-box",
                          fontFamily: "'Source Sans 3', sans-serif",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#8b2000")}
                        onBlur={(e) => (e.target.style.borderColor = "#d4c4a0")}
                      />
                    </label>
                  ))}

                  <div className="grid grid-cols-2" style={{ gap: 12 }}>
                    <label style={{ display: "block" }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#5c3d1e", display: "block", marginBottom: 6 }}>
                        Ngày *
                      </span>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        required
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          border: "1px solid #d4c4a0",
                          borderRadius: 4,
                          fontSize: 15,
                          background: "#f5f0e8",
                          color: "#2c1a0e",
                          outline: "none",
                          boxSizing: "border-box",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#8b2000")}
                        onBlur={(e) => (e.target.style.borderColor = "#d4c4a0")}
                      />
                    </label>
                    <label style={{ display: "block" }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#5c3d1e", display: "block", marginBottom: 6 }}>
                        Giờ *
                      </span>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        required
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          border: "1px solid #d4c4a0",
                          borderRadius: 4,
                          fontSize: 15,
                          background: "#f5f0e8",
                          color: "#2c1a0e",
                          outline: "none",
                          boxSizing: "border-box",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        <option value="">Chọn giờ</option>
                        {["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "18:00", "19:00", "20:00"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label style={{ display: "block" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#5c3d1e", display: "block", marginBottom: 6 }}>
                      Số khách
                    </span>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        border: "1px solid #d4c4a0",
                        borderRadius: 4,
                        fontSize: 15,
                        background: "#f5f0e8",
                        color: "#2c1a0e",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8", "10+"].map((n) => (
                        <option key={n} value={n}>{n} người</option>
                      ))}
                    </select>
                  </label>

                  <label style={{ display: "block" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#5c3d1e", display: "block", marginBottom: 6 }}>
                      Ghi chú
                    </span>
                    <textarea
                      placeholder="Yêu cầu đặc biệt, dị ứng thực phẩm..."
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      rows={3}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        border: "1px solid #d4c4a0",
                        borderRadius: 4,
                        fontSize: 15,
                        background: "#f5f0e8",
                        color: "#2c1a0e",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#8b2000")}
                      onBlur={(e) => (e.target.style.borderColor = "#d4c4a0")}
                    />
                  </label>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "#8b2000",
                      color: "#fdf9f2",
                      border: "none",
                      borderRadius: 4,
                      fontWeight: 700,
                      fontSize: 15,
                      cursor: "pointer",
                      fontFamily: "'Source Sans 3', sans-serif",
                      letterSpacing: 0.5,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#a52500")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#8b2000")}
                  >
                    Xác Nhận Đặt Bàn
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div>
            <div
              style={{
                background: "#2c1a0e",
                borderRadius: 6,
                padding: "32px",
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fdf9f2",
                  marginBottom: 24,
                }}
              >
                Thông Tin Liên Hệ
              </h3>
              {[
                { icon: "📍", label: "Địa chỉ", value: "48 Phố Hàng Bông, Hoàn Kiếm, Hà Nội" },
                { icon: "📞", label: "Điện thoại", value: "024 3825 4567" },
                { icon: "🕐", label: "Giờ mở cửa", value: "Thứ Hai – Chủ Nhật: 6:00 – 14:00 & 18:00 – 22:00" },
                { icon: "✉️", label: "Email", value: "datban@phogiatruyen.vn" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3" style={{ marginBottom: 18 }}>
                  <span style={{ fontSize: 18, lineHeight: 1.4 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#b8860b", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>
                      {info.label}
                    </div>
                    <div style={{ color: "#e8ddc8", fontSize: 14, lineHeight: 1.5 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bản đồ */}
            <div
              style={{
                borderRadius: 6,
                overflow: "hidden",
                height: 220,
                background: "#e8ddc8",
                position: "relative",
                border: "1px solid #d4c4a0",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1771830916697-b37ccedf31e7?w=700&h=300&fit=crop&auto=format"
                alt="Bản đồ vị trí nhà hàng"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(30%) brightness(0.9)" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(44,26,14,0.5)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>📍</div>
                  <div style={{ color: "#fdf9f2", fontWeight: 600, fontSize: 14 }}>48 Phố Hàng Bông</div>
                  <div style={{ color: "#e8ddc8", fontSize: 12 }}>Hoàn Kiếm, Hà Nội</div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: 10,
                      background: "#8b2000",
                      color: "#fdf9f2",
                      padding: "6px 16px",
                      borderRadius: 4,
                      fontSize: 12,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Mở Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}