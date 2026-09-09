// File: src/components/About.tsx

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 1.5rem", background: "#2c1a0e" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 60, alignItems: "center" }}>
          {/* Hình ảnh */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -16,
                left: -16,
                width: "calc(100% - 32px)",
                height: "calc(100% - 32px)",
                border: "1px solid rgba(184, 134, 11, 0.4)",
                borderRadius: 6,
                zIndex: 0,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1771830916739-0b4b665c8d87?w=700&h=520&fit=crop&auto=format"
              alt="Không gian nhà hàng Phở Gia Truyền"
              style={{
                width: "100%",
                height: 380,
                objectFit: "cover",
                borderRadius: 6,
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />
          </div>

          {/* Nội dung câu chuyện */}
          <div>
            <div
              style={{
                color: "#b8860b",
                fontSize: 12,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Câu Chuyện Của Chúng Tôi
            </div>
            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
                color: "#fdf9f2",
                lineHeight: 1.3,
                marginBottom: 24,
              }}
            >
              Bí Quyết Nấu Nước Dùng
              <br />
              <em style={{ color: "#f0c060" }}>12 Tiếng Không Ngừng</em>
            </h2>
            <blockquote
              style={{
                borderLeft: "3px solid #b8860b",
                paddingLeft: 20,
                marginBottom: 24,
                fontFamily: "'Lora', serif",
                fontStyle: "italic",
                fontSize: 18,
                color: "#e8ddc8",
                lineHeight: 1.7,
              }}
            >
              "Xương bò phải được chần sạch, rồi hầm chậm từ 3 giờ sáng với hồi, quế,
              đinh hương nướng thơm. Không dùng mì chính, không pha chế — chỉ có thời gian
              và sự kiên nhẫn."
            </blockquote>
            <p style={{ color: "#a89070", lineHeight: 1.8, marginBottom: 20 }}>
              Bà Nguyễn Thị Lan, người sáng lập, đã mang bí quyết từ Nam Định lên Hà Nội
              năm 1975. Ngày nay, con trai và cháu gái bà tiếp nối truyền thống đó mỗi
              sáng sớm — bắt đầu từ 3 giờ sáng, khi cả thành phố còn đang ngủ.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: "🔥", text: "Hầm 12 tiếng mỗi ngày" },
                { icon: "🌿", text: "Rau thơm hái buổi sáng" },
                { icon: "🐄", text: "Thịt bò tươi từ chợ" },
                { icon: "⭐", text: "Không bột ngọt, không chất bảo quản" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2">
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <span style={{ color: "#c8b090", fontSize: 13, fontWeight: 500 }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}