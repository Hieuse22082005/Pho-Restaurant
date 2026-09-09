// File: src/components/Hero.tsx

import { motion } from "framer-motion";
import bannerPho from '../banner-pho.jpg'; // Dùng cách import ảnh của bạn (nếu có) hoặc dùng URL mạng

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* ẢNH NỀN */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(/0280080dac5d7aaa1051efd3566e6aea.jpg)`, // Đổi lại đúng link ảnh của bạn ở đây nhé
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          filter: "brightness(0.5)", 
        }}
      />
      
      {/* LỚP PHỦ ĐEN ĐỂ CHỮ NỔI BẬT HƠN */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          // Đổi gradient để bên trái tối hơn một chút, giúp chữ dễ đọc trên nền ảnh phở
          background: "linear-gradient(90deg, rgba(26,14,6,0.8) 0%, rgba(26,14,6,0.2) 60%, transparent 100%)",
        }}
      />

      {/* ĐƯỜNG KẺ VÀNG BÊN TRÁI */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 5, // Cột vàng to hơn 1 chút
          background: "linear-gradient(to bottom, transparent, #b8860b, transparent)",
        }}
      />

      {/* KHUNG CHỨA TOÀN BỘ NỘI DUNG */}
      <div
        style={{
          position: "relative",
          maxWidth: 2000, // TĂNG LÊN 1400px (cũ là 1200px) ĐỂ NỘI DUNG ĐẨY SÁT RA LỀ TRÁI HƠN
          margin: "0 auto",
          padding: "80px 2rem 60px",
          width: "100%",
        }}
      >
        {/* KHUNG GIỚI HẠN VĂN BẢN */}
        <div style={{ maxWidth: 800 }}> {/* TĂNG LÊN 800px (cũ là 640px) ĐỂ KHỐI CHỮ TO RA */}
          
          <div
            style={{
              display: "inline-block",
              color: "#b8860b",
              fontSize: 15, // Chữ nhỏ to hơn (cũ là 12)
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 24,
              borderBottom: "1px solid #b8860b",
              paddingBottom: 6,
            }}
          >
            Gia Truyền Từ Năm 1975 · Nam Định
          </div>
          
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)", // CHỮ TIÊU ĐỀ SIÊU TO (cũ max là 4.5rem)
              fontWeight: 700,
              color: "#fdf9f2",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Một Bát Phở,
            <br />
            <em style={{ color: "#f0c060", fontStyle: "italic" }}>Cả Một Ký Ức</em>
          </h1>
          
          <p
            style={{
              color: "#e0d0b8",
              fontSize: 22, // CHỮ ĐOẠN VĂN TO HƠN (cũ là 18)
              lineHeight: 1.7,
              marginBottom: 48,
              fontWeight: 300,
              maxWidth: 650, // Khống chế chiều ngang đoạn văn cho dễ đọc
            }}
          >
            Nước dùng xương bò hầm 12 tiếng, bí quyết gia truyền qua 3 thế hệ.
            Mỗi bát phở là một hành trình về với hương vị Hà Nội xưa.
          </p>
          
          <div className="flex flex-wrap gap-5">
            {/* Nút Đặt Bàn Ngay */}
            <motion.a
              href="#reservation"
              style={{
                background: "#8b2000",
                color: "#fdf9f2",
                padding: "16px 36px", // Nút to ra
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16, // Chữ trong nút to ra
                letterSpacing: 0.5,
                display: "inline-block",
              }}
              whileHover={{ backgroundColor: "#a52500", y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Đặt Bàn Ngay
            </motion.a>

            {/* Nút Xem Thực Đơn */}
            <motion.a
              href="#menu"
              style={{
                background: "transparent",
                color: "#fdf9f2",
                border: "2px solid rgba(253, 249, 242, 0.5)", // Viền đậm hơn 1 chút
                padding: "16px 36px",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: 0.5,
                display: "inline-block",
              }}
              whileHover={{ backgroundColor: "rgba(253, 249, 242, 0.1)", borderColor: "#fdf9f2", y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Xem Thực Đơn &rarr;
            </motion.a>
          </div>

          {/* Thống kê */}
          <div
            className="flex flex-wrap gap-10" // Tăng khoảng cách giữa các cột thống kê
            style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            {[
              { value: "1975", label: "Năm thành lập" },
              { value: "3", label: "Thế hệ gia truyền" },
              { value: "12h", label: "Hầm xương mỗi ngày" },
              { value: "4.9★", label: "Đánh giá trung bình" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: 32, // Số thống kê to hơn (cũ là 26)
                    fontWeight: 700,
                    color: "#f0c060",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 14, color: "#a89070", letterSpacing: 0.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}