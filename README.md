# 🍜 Phở Gia Truyền - Restaurant Website

Một trang web hiện đại, mượt mà và sang trọng dành cho nhà hàng Phở truyền thống. Dự án được xây dựng với kiến trúc Component-based gọn gàng, tích hợp các hiệu ứng chuyển động vật lý (spring physics) cao cấp.

## 🚀 Công Nghệ Sử Dụng

* **Khung dự án (Framework):** React + TypeScript
* **Công cụ xây dựng (Build Tool):** Vite
* **Hiệu ứng chuyển động (Animation):** Framer Motion
* **Ngôn ngữ thiết kế:** CSS kết hợp Inline Styles (Tailwind CSS)

## ✨ Tính Năng Nổi Bật

* 🎨 **Thiết kế Sang trọng:** Giao diện tối màu (Dark/Brown theme) tôn vinh nét đẹp ẩm thực Việt Nam.
* 📱 **Tương thích mọi thiết bị (Responsive):** Hiển thị hoàn hảo trên cả điện thoại, máy tính bảng và màn hình lớn.
* 🪄 **Hiệu ứng Điện ảnh:** 
  * Thanh điều hướng (Navbar) trong suốt và tự động đổ màu khi cuộn trang.
  * Các nút bấm tương tác nảy (spring) với vật lý chân thực.
* 🧩 **Kiến trúc Module:** Code được chia nhỏ thành các thành phần độc lập, dễ dàng bảo trì và nâng cấp.

## 📁 Cấu Trúc Thư Mục

Dự án đã được tái cấu trúc (Refactor) từ một file monolithic thành hệ thống module:

```text
src/
 ├── components/           # Các mảnh ghép giao diện
 │    ├── Navbar.tsx       # Thanh điều hướng (Sticky & Transparent-to-solid)
 │    ├── Hero.tsx         # Banner ảnh lớn đầu trang
 │    ├── BestSellers.tsx  # Danh sách món đặc sản
 │    ├── About.tsx        # Câu chuyện thương hiệu
 │    ├── MenuSection.tsx  # Thực đơn (có phân loại bằng Tabs)
 │    ├── Reviews.tsx      # Đánh giá từ khách hàng
 │    ├── Reservation.tsx  # Form đặt bàn & Bản đồ
 │    ├── Footer.tsx       # Chân trang
 │    └── StarRating.tsx   # Component dùng chung (Đánh giá sao)
 ├── data/
 │    └── constants.ts     # Nơi lưu trữ toàn bộ dữ liệu tĩnh (Text, Menu, Ảnh...)
 ├── App.tsx               # File gốc (Nhạc trưởng lắp ráp các component)
 └── main.tsx              # Điểm khởi chạy của React
