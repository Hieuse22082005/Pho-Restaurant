// File: src/components/About.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Danh sách 5 câu chuyện đã được sắp xếp theo đúng thứ tự của bạn
const ABOUT_STORIES = [
  {
    id: 0,
    tag: "Câu Chuyện Của Chúng Tôi",
    title: "Bí Quyết Nấu Nước Dùng\n12 Tiếng Không Ngừng",
    quote: "Xương bò phải được chần sạch, rồi hầm chậm từ 3 giờ sáng với hồi, quế, đinh hương nướng thơm. Không dùng mì chính, không pha chế — chỉ có thời gian và sự kiên nhẫn.",
    desc: "Bà Nguyễn Thị Lan, người sáng lập, đã mang bí quyết từ Nam Định lên Hà Nội năm 1975. Ngày nay, con trai và cháu gái bà tiếp nối truyền thống đó mỗi sáng sớm — bắt đầu từ 3 giờ sáng, khi cả thành phố còn đang ngủ.",
    img: "/nuocdung.jpg", // Đã cập nhật ảnh Nước dùng
    features: [
      { icon: "🔥", text: "Hầm 12 tiếng mỗi ngày" },
      { icon: "🌿", text: "Rau thơm hái buổi sáng" },
      { icon: "🐄", text: "Thịt bò tươi từ chợ" },
      { icon: "⭐", text: "Không bột ngọt, không chất bảo quản" },
    ],
  },
  {
    id: 1,
    tag: "Tinh Hoa Nguyên Liệu",
    title: "Bánh Phở Tráng Tay\nMềm Dai Tự Nhiên",
    quote: "Gạo phải là loại gạo tẻ rốn thơm, ngâm đủ nước rồi xay nhuyễn. Tráng phở mỏng vừa phải, thái bằng tay để sợi phở ngấm trọn vẹn tinh hoa của nước dùng.",
    desc: "Chúng tôi kiên quyết không dùng bánh phở sản xuất công nghiệp. Mỗi sợi phở bạn thưởng thức đều được đặt tráng thủ công từ lò phở gia truyền lâu đời nhất, giao đến nhà hàng khi trời còn chưa sáng.",
    img: "/Soipho .jpg", // Đã cập nhật ảnh Sợi phở
    features: [
      { icon: "🌾", text: "Gạo tẻ rốn thượng hạng" },
      { icon: "👐", text: "Tráng và thái thủ công" },
      { icon: "✨", text: "Tuyệt đối không hàn thu" },
      { icon: "🥢", text: "Sợi mềm, ngấm vị" },
    ],
  },
  {
    id: 2,
    tag: "Nghệ Thuật Thái Thịt",
    title: "Bò Tơ Hảo Hạng\nTươi Ngon Từng Lát",
    quote: "Thịt bò thái phải mỏng như lá lúa, thả vào bát phở chín tới, giữ được độ ngọt bản nguyên và màu hồng nhạt hấp dẫn. Đó là nghệ thuật của người thợ đứng thớt.",
    desc: "Từng tảng gầu giòn, nạm mỡ, lõi rùa hay thăn bò xịn đều được tuyển chọn khắt khe mỗi 4 giờ sáng từ lò mổ. Miếng thịt tươi rói, thái điêu luyện để đảm bảo trải nghiệm vị giác bùng nổ nhất.",
    img: "/bo.png", // Đã cập nhật ảnh Thịt bò
    features: [
      { icon: "🔪", text: "Dao phay sắc bén" },
      { icon: "🥩", text: "Tuyển chọn loại 1" },
      { icon: "⏱️", text: "Thái ngay khi phục vụ" },
      { icon: "💯", text: "Gầu giòn, tái mềm ngọt" },
    ],
  },
  {
    id: 3,
    tag: "Biến Tấu Tinh Tế",
    title: "Phở Gà Ta Thả Đồi\nThanh Tao Tròn Vị",
    quote: "Nước dùng gà óng ả mỡ vàng, thanh tao mà sâu lắng. Điểm xuyết chút lá chanh thái chỉ, miếng da gà giòn sần sật đánh thức mọi giác quan.",
    desc: "Bên cạnh bát phở bò trứ danh, phở gà của quán là lựa chọn hoàn hảo cho những ngày thèm sự thanh nhẹ. Gà được tuyển chọn kĩ lưỡng, luộc chín tới độ hoàn hảo để giữ trọn vị ngọt thịt bản nguyên.",
    img: "/Ga.jpg", // Đã cập nhật ảnh Gà
    features: [
      { icon: "🐓", text: "Gà ta thả đồi dai ngon" },
      { icon: "💛", text: "Nước dùng thanh khiết" },
      { icon: "🥚", text: "Kèm tràng trứng non béo ngậy" },
      { icon: "🍋", text: "Hương lá chanh chuẩn vị" },
    ],
  },
  {
    id: 4,
    tag: "Góc Phố Hoài Niệm",
    title: "Không Gian Đậm Chất\nẤm Cúng & Gần Gũi",
    quote: "Ánh đèn vàng ấm áp, bàn ghế gỗ mộc mạc cùng hương phở thoang thoảng trong không khí... Tất cả tạo nên một bản hòa ca của ký ức.",
    desc: "Thưởng thức phở không chỉ là nếm một món ăn, mà là sống lại một cảm giác. Chúng tôi chăm chút từng góc không gian để bạn có thể tìm thấy sự bình yên, thư thái khi dùng bữa cùng gia đình và bạn bè.",
    img: "/khonggianpho.png", // Đã cập nhật ảnh Không gian
    features: [
      { icon: "🏮", text: "Kiến trúc ấm cúng" },
      { icon: "🪑", text: "Bàn ghế gỗ mộc mạc" },
      { icon: "🌱", text: "Điểm xuyết mảng xanh" },
      { icon: "🎶", text: "Âm nhạc nhẹ nhàng" },
    ],
  }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hiệu ứng Tự Động Chuyển Slide (5 giây chuyển 1 lần)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ABOUT_STORIES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const story = ABOUT_STORIES[currentIndex];

  return (
    <section id="about" style={{ padding: "80px 1.5rem", background: "#2c1a0e", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 60, alignItems: "center" }}
          >
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
                src={story.img}
                alt={story.title.replace('\n', ' ')}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "cover",
                  borderRadius: 6,
                  position: "relative",
                  zIndex: 1,
                  display: "block",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
              />
            </div>

            {/* Nội dung câu chuyện */}
            <div style={{ minHeight: 420, display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
                {story.tag}
              </div>
              <h2
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fdf9f2",
                  lineHeight: 1.3,
                  marginBottom: 24,
                  whiteSpace: "pre-line"
                }}
              >
                {story.title}
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
                "{story.quote}"
              </blockquote>
              <p style={{ color: "#a89070", lineHeight: 1.8, marginBottom: 24 }}>
                {story.desc}
              </p>
              <div className="flex flex-wrap gap-6">
                {story.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2" style={{ width: "calc(50% - 12px)" }}>
                    <span style={{ fontSize: 18 }}>{f.icon}</span>
                    <span style={{ color: "#c8b090", fontSize: 13, fontWeight: 500 }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CÁC NÚT CHUYỂN SLIDE (DOTS) - Đã cập nhật cho 5 slide */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 48 }}>
          {ABOUT_STORIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: currentIndex === idx ? 32 : 12,
                height: 12,
                borderRadius: 6,
                background: currentIndex === idx ? "#b8860b" : "rgba(184, 134, 11, 0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}