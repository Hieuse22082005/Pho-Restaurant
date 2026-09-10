// File: src/components/VideoSection.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEOS = [
  { 
    id: 1, 
    src: "/4362882-uhd_3840_2160_30fps (1).mp4",
    title: "1. Nồi Nước Dùng Tinh Túy",
    desc: "Hầm chậm 12 tiếng với xương ống và thảo mộc, tạo nên dòng nước trong vắt, ngọt thanh và ngậy mùi hoa hồi, quế."
  },
  { 
    id: 2, 
    src: "/thaithit.mp4", 
    title: "2. Nghệ Thuật Cắt Thái",
    desc: "Từng nhát dao điêu luyện lướt qua tảng lõi rùa, thái mỏng như lá lúa để giữ trọn vẹn độ mềm và ngọt nguyên bản."
  },
  { 
    id: 3, 
    src: "/leo.mp4", 
    title: "3. Tuyệt Kỹ Chan Nước",
    desc: "Dòng nước lèo sôi sục tưới đẫm lên bánh phở mướt mát và những lát bò tơ, làm bừng tỉnh mọi giác quan."
  },
  { 
    id: 4, 
    src: "/phowrthanhpham.mp4", 
    title: "4. Bát Phở Hoàn Mỹ",
    desc: "Sự hòa quyện tuyệt vời của sắc - hương - vị. Bát phở nóng hổi, điểm xuyết hành chẻ, sẵn sàng đánh thức vị giác."
  },
  { 
    id: 5, 
    src: "/nhahanh.mp4", 
    title: "5. Không Gian Hoài Niệm",
    desc: "Tận hưởng hương vị truyền thống trong một góc phố bình yên, nơi kiến trúc mộc mạc lưu giữ nét duyên của Hà Nội xưa."
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  // HIỆU ỨNG TỰ ĐỘNG CHUYỂN CẢNH (Mỗi 6 giây)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((current) => {
        const currentIndex = VIDEOS.findIndex(v => v.id === current.id);
        const nextIndex = (currentIndex + 1) % VIDEOS.length;
        return VIDEOS[nextIndex];
      });
    }, 6000); // 6000ms = 6 giây (Bạn có thể đổi số này nếu muốn chuyển nhanh/chậm hơn)

    return () => clearInterval(timer);
  }, [activeVideo]); // Khởi động lại timer nếu người dùng tự click tay

  return (
    <section style={{ padding: "100px 1.5rem", background: "#1a0e06", position: "relative" }}>
      
      <div 
        style={{ 
          position: "absolute", inset: 0, 
          background: "radial-gradient(circle at right, rgba(139, 32, 0, 0.08) 0%, transparent 60%)",
          pointerEvents: "none"
        }} 
      />

      <div style={{ maxWidth: 1150, margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: "#b8860b", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>
            Hành Trình Vị Giác
          </div>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fdf9f2" }}>
            Thước Phim Cảm Xúc
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 48, alignItems: "center" }}>
          
          {/* CỘT TRÁI: MÀN HÌNH VIDEO */}
          <div className="lg:col-span-7">
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5", 
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(184, 134, 11, 0.3)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                backgroundColor: "#000",
              }}
            >
              <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 40px rgba(26,14,6,0.8)", zIndex: 1, pointerEvents: "none" }} />
              
              <AnimatePresence mode="wait">
                <motion.video
                  key={activeVideo.id} 
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{
                    width: "100%", height: "100%",
                    display: "block", objectFit: "cover",
                  }}
                >
                  <source src={activeVideo.src} type="video/mp4" />
                </motion.video>
              </AnimatePresence>
            </div>
          </div>

          {/* CỘT PHẢI: MENU TỰ ĐỘNG CHẠY (CHỮ ĐÃ ĐƯỢC PHÓNG TO) */}
          <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {VIDEOS.map((vid) => {
              const isActive = activeVideo.id === vid.id;
              return (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  style={{
                    padding: "20px 24px", // Phóng to khung viền bao quanh chữ
                    borderRadius: 12,
                    cursor: "pointer",
                    borderLeft: isActive ? "4px solid #b8860b" : "4px solid transparent", // Vạch màu to hơn
                    background: isActive ? "rgba(184, 134, 11, 0.05)" : "transparent",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: 22, // CHỮ TIÊU ĐỀ TO RÕ RÀNG
                      fontWeight: 700,
                      color: isActive ? "#fdf9f2" : "#8a7558",
                      marginBottom: 8,
                      transition: "color 0.3s",
                    }}
                  >
                    {vid.title}
                  </h3>
                  
                  <p
                    style={{
                      color: isActive ? "#c8b090" : "#5c4a3d",
                      fontSize: 16, // CHỮ MÔ TẢ TO HƠN
                      lineHeight: 1.6,
                      margin: 0,
                      maxHeight: isActive ? "150px" : "0px", // Tăng khoảng không để chứa chữ to
                      opacity: isActive ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {vid.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}