// File: src/components/Reviews.tsx

import React from "react";

const testimonials = [
  {
    author: { name: "Hoàng Nhật Minh", handle: "@minhhoang.foodie", avatar: "https://i.pravatar.cc/150?u=minh" },
    text: "Nước dùng thanh, thơm mùi hồi quế đặc trưng của phở xưa. Điểm trừ nhỏ là cuối tuần quán khá đông, phải đợi tầm 10 phút mới có bàn."
  },
  {
    author: { name: "Trần Mai Lan", handle: "@lan_tran89", avatar: "https://i.pravatar.cc/150?u=lan" },
    text: "Giá 120k cho một bát đặc biệt ban đầu thấy hơi cao, nhưng bưng ra thì 'xắt ra miếng'. Lõi rùa giòn sần sật, ăn khác hẳn phở đại trà."
  },
  {
    author: { name: "Nguyễn Quốc Thái", handle: "@thainguyen_hn", avatar: "https://i.pravatar.cc/150?u=thai" },
    text: "Quẩy ở đây luôn mới và giòn, không bị hôi dầu. Giao hàng về nhà nước dùng vẫn nóng hổi, nhưng khuyên thật là nên ăn tại quán để ngon nhất."
  },
  {
    author: { name: "Lê Thanh Thảo", handle: "@thaole.lifestyle", avatar: "https://i.pravatar.cc/150?u=thao" },
    text: "Rất ấn tượng với khâu vệ sinh. Lọ giấm tỏi, tương ớt trên bàn lúc nào cũng sạch sẽ, không bị nháp dính như nhiều quán truyền thống khác."
  },
  {
    author: { name: "Đỗ Kiến Quốc", handle: "@quoc_architect", avatar: "https://i.pravatar.cc/150?u=quoc" },
    text: "Phở tái lăn xào tỏi rất xém lửa và đậm vị. Tuy nhiên ai thích ăn thanh đạm thì nên gọi phở chín hoặc tái nạm sẽ hợp lý hơn."
  },
  {
    author: { name: "Vũ Hải Yến", handle: "@haiyen.vu", avatar: "https://i.pravatar.cc/150?u=yen" },
    text: "Đưa đối tác người nước ngoài đến đây ăn sáng rất yên tâm. Không gian có gu, lịch sự. Nhân viên phục vụ nhanh nhẹn dù khách ra vào liên tục."
  },
  {
    author: { name: "Phạm Văn Đức", handle: "@ducpham_99", avatar: "https://i.pravatar.cc/150?u=duc" },
    text: "Cảnh báo mọi người tương ớt ở đây là tương ớt xay thủ công, rất cay nhé! Lần trước lỡ tay cho hai thìa mà húp nước dùng toát hết mồ hôi."
  },
  {
    author: { name: "Bùi Ngọc Ánh", handle: "@ngocanh.bui", avatar: "https://i.pravatar.cc/150?u=anh" },
    text: "Nước phở thiên về vị ngọt thanh từ xương, không bị lợ vị mì chính. Chỗ để xe hơi hẹp một chút, may mà có chú bảo vệ dắt xe giúp rất nhiệt tình."
  },
  {
    author: { name: "Trịnh Gia Huy", handle: "@huytrinh.dev", avatar: "https://i.pravatar.cc/150?u=huy" },
    text: "Thích nhất miếng gầu ở đây, dắt mỡ vàng ươm, nhai giòn rụm mà không hề bị ngấy. Sáng cuối tuần nào cũng phải làm một bát mới tỉnh người."
  },
  {
    author: { name: "Hồ Thu Trà", handle: "@thutra.ho", avatar: "https://i.pravatar.cc/150?u=tra" },
    text: "Món nộm gà xé phay ăn kèm cực kỳ bon miệng, vị chua ngọt chống ngán hoàn hảo. Sẽ quay lại để thử thêm phở ngọc kê."
  }
];

// ICON NGÔI SAO VÀNG
const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#b8860b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const TestimonialCard = ({ author, text }: typeof testimonials[0]) => (
  <div style={{
    width: "320px",
    padding: "24px",
    borderRadius: "16px",
    background: "#fdf9f2",
    border: "1px solid #e8ddc8",
    boxShadow: "0 4px 12px rgba(44, 26, 14, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    flexShrink: 0
  }}>
    {/* HÀNG 5 NGÔI SAO */}
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(5)].map((_, i) => <Star key={i} />)}
    </div>
    
    <p style={{ color: "#5c3d1e", fontSize: "15px", lineHeight: 1.6, fontStyle: "italic", margin: 0, flex: 1 }}>
      "{text}"
    </p>
    
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto" }}>
      <img src={author.avatar} alt={author.name} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
      <div>
        <div style={{ fontWeight: 600, color: "#2c1a0e", fontSize: "14px" }}>{author.name}</div>
        <div style={{ color: "#a89070", fontSize: "13px" }}>{author.handle}</div>
      </div>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: "100px 0", background: "#f5f0e8" }}>
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          .marquee-container {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .marquee-wrapper:hover .marquee-container {
            animation-play-state: paused; 
          }
        `}
      </style>

      {/* KHUNG CHỨA (Giữ cho mọi thứ thẳng hàng, không bị tràn viền) */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ color: "#8b2000", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>
            Đánh Giá
          </div>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#2c1a0e", marginBottom: "16px" }}>
            Thực Khách Nói Gì Về Chúng Tôi?
          </h2>
          <p style={{ color: "#7a5c3a", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Những cảm nhận chân thực nhất từ những vị khách đã ghé thăm và thưởng thức hương vị Phở Gia Truyền.
          </p>
        </div>

        {/* THU GỌN BĂNG CHUYỀN VÀO BÊN TRONG CONTAINER */}
        <div className="marquee-wrapper" style={{ position: "relative", overflow: "hidden", padding: "10px 0" }}>
          
          <div className="marquee-container">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>

          {/* Bóng mờ làm dịu mép của băng chuyền, nay cũng nằm gọn gàng bên trong */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "80px", background: "linear-gradient(to right, #f5f0e8, transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "80px", background: "linear-gradient(to left, #f5f0e8, transparent)", pointerEvents: "none" }} />
        
        </div>
      </div>
    </section>
  );
}