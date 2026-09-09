// File: src/data/constants.ts

export const NAV_LINKS = [
  { label: "Trang Chủ", href: "#home" },
  { label: "Thực Đơn", href: "#menu" },
  { label: "Về Chúng Tôi", href: "#about" },
  { label: "Đánh Giá", href: "#reviews" },
  { label: "Đặt Bàn", href: "#reservation" },
];

export const BEST_SELLERS = [
  {
    name: "Phở Bò Tái Chín",
    desc: "Thịt bò tươi tái kết hợp thịt chín, nước dùng 12 tiếng thanh ngọt, bánh phở sợi mềm dai.",
    price: "75.000đ",
    tag: "Bán Chạy Nhất",
    img: "https://images.unsplash.com/photo-1597345637412-9fd611e758f3?w=600&h=400&fit=crop&auto=format",
  },
  {
    name: "Phở Bò Gân Sách",
    desc: "Gân bò mềm tan, sách bò giòn sần sật, chan đầy nước dùng thơm hồi quế đặc trưng.",
    price: "80.000đ",
    tag: "Đặc Biệt",
    img: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?w=600&h=400&fit=crop&auto=format",
  },
  {
    name: "Phở Bò Đặc Biệt",
    desc: "Tổng hợp tái, chín, gân, sách, gầu — thưởng thức trọn vẹn tinh hoa một bát phở Hà Nội.",
    price: "95.000đ",
    tag: "Phổ Biến",
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop&auto=format",
  },
];

export const MENU_CATEGORIES = [
  {
    id: "pho-nuoc",
    label: "Phở Nước",
    items: [
      { name: "Phở Bò Tái", price: "70.000đ", desc: "Thịt bò tươi tái, sợi phở mềm" },
      { name: "Phở Bò Chín", price: "70.000đ", desc: "Thịt bò chín mềm tan" },
      { name: "Phở Bò Tái Chín", price: "75.000đ", desc: "Kết hợp tái và chín" },
      { name: "Phở Bò Gân Sách", price: "80.000đ", desc: "Gân và sách bò" },
      { name: "Phở Bò Đặc Biệt", price: "95.000đ", desc: "Tái, chín, gân, sách, gầu" },
      { name: "Phở Gà", price: "65.000đ", desc: "Gà ta nấu cùng nước dùng thanh nhẹ" },
    ],
  },
  {
    id: "pho-tron",
    label: "Phở Trộn",
    items: [
      { name: "Phở Trộn Bò Sốt Vang", price: "80.000đ", desc: "Bò hầm sốt vang trộn phở khô" },
      { name: "Phở Trộn Gà Nướng", price: "75.000đ", desc: "Gà nướng than hoa, tương hoisin" },
      { name: "Phở Trộn Trứng Lòng Đào", price: "70.000đ", desc: "Trứng lòng đào béo ngậy" },
    ],
  },
  {
    id: "mon-kem",
    label: "Món Ăn Kèm",
    items: [
      { name: "Quẩy Giòn", price: "10.000đ", desc: "Quẩy nóng giòn rụm" },
      { name: "Giò Lụa", price: "25.000đ", desc: "Giò lụa Ngọc Hân  Hà Nội" },
      { name: "Chả Cốm", price: "30.000đ", desc: "Chả cốm xanh thơm dẻo" },
      { name: "Đĩa Rau Sống", price: "15.000đ", desc: "Giá đỗ, húng quế, chanh ớt tươi" },
    ],
  },
  {
    id: "do-uong",
    label: "Đồ Uống",
    items: [
      { name: "Trà Đá", price: "5.000đ", desc: "Trà thơm mát lạnh" },
      { name: "Trà Nóng", price: "5.000đ", desc: "Trà ướp sen Hà Nội" },
      { name: "Nước Chanh Muối", price: "20.000đ", desc: "Giải nhiệt, giải ngán" },
      { name: "Bia Hà Nội", price: "25.000đ", desc: "Bia lon lạnh" },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Nguyễn Minh Tuấn",
    location: "Hà Nội",
    rating: 5,
    text: "Nước dùng thật sự khác biệt — ngọt thanh, thơm hồi, không cần thêm bất kỳ gia vị gì. Cảm giác như được ăn phở ở nhà bà nội. Tôi sẽ còn quay lại nhiều lần nữa!",
    avatar: "NT",
  },
  {
    name: "Trần Phương Linh",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    text: "Từ Sài Gòn ra Hà Nội, tôi nhất định phải ghé đây. Bát phở đặc biệt đúng nghĩa — thịt tươi, gân mềm, nước dùng sóng sánh vàng ươm. Quá tuyệt vời!",
    avatar: "TL",
  },
  {
    name: "Lê Quốc Bảo",
    location: "Nam Định",
    rating: 5,
    text: "Là người Nam Định, tôi rất khó tính với phở. Nhưng phở ở đây thật sự chinh phục tôi — vị xương thịt đậm đà, sợi phở mềm dai vừa phải, rau thơm tươi xanh.",
    avatar: "LB",
  },
];