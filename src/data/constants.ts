// File: src/data/constants.ts

export const NAV_LINKS = [
  { label: "Trang Chủ", href: "#home" },
  { label: "Thực Đơn", href: "#menu" },
  { label: "Về Chúng Tôi", href: "#about" },
  { label: "Đánh Giá", href: "#reviews" },
  { label: "Đặt Bàn", href: "#reservation" },
];

export const MENU_CATEGORIES = [
  {
    id: "pho-bo",
    label: "Phở Bò",
    items: [
      { name: "Phở Đặc Biệt", desc: "Tái, chín, nạm, gầu, gân, bò viên", price: "120.000Đ", img: "/phodacbiet.png", hoverInfo: "Tô phở 'ngập thịt' dành cho người sành ăn. Đầy đủ tinh hoa bò tơ từ tái mềm, gầu giòn đến gân sực, hòa quyện trong nước dùng 12 tiếng." },
      
      { name: "Phở Lõi Rùa Đặc Biệt", desc: "Phần lõi bắp rùa quý hiếm số lượng giới hạn", price: "100.000Đ", img: "/loidacbiet.jpg", /* THIẾU ẢNH */ hoverInfo: "Tuyệt phẩm hiếm có! Lõi rùa giòn tan đan xen vân mỡ tơi xốp, nhúng tái ngọt lịm. Số lượng rất ít mỗi ngày, ai đến sớm mới được thưởng thức." },
      
      { name: "Phở Lõi Rùa", desc: "Thịt bắp rùa giòn ngọt", price: "85.000Đ", img: "/phobaploi.png", hoverInfo: "Thịt bắp rùa với đường gân hoa giòn rụm, nhai sần sật vui miệng, cắn đến đâu tươm nước ngọt lịm đến đó." },
      
      { name: "Phở Bắp", desc: "Thịt bắp hoa bò tơ", price: "75.000Đ", img: "/kin05083661111zon_DtGUJsVF.png", /* THIẾU ẢNH */ hoverInfo: "Bắp hoa thơm đậm đà, kết cấu săn chắc thịt, nhúng vào nước phở đang sôi sùng sục tạo nên độ ngọt hoàn hảo." },
      
      { name: "Phở Bắp Chín", desc: "Bắp hoa và thịt chín thái lát", price: "80.000Đ", img: "/kin05083661111zon_DtGUJsVF.png", /* THIẾU ẢNH */ hoverInfo: "Sự kết hợp giữa bắp tươi ngọt nước và thịt chín đậm đà, thơm lừng mùi bò luộc đặc trưng của phở xưa." },
      
      { name: "Phở Bắp Nạm", desc: "Bắp hoa và nạm mỡ", price: "80.000Đ", img: "/Phở-Bắp-Nạm-Gầu.jpg", /* THIẾU ẢNH */ hoverInfo: "Trải nghiệm đa tầng vị giác: bắp hoa săn chắc đan xen cùng dải nạm béo ngậy tan chảy trong miệng." },
      
      { name: "Phở Tái", desc: "Thịt bò tươi đập dập nhúng tái", price: "60.000Đ", img: "/Ph____b___t__i.jpg", hoverInfo: "Thịt tảng tươi rói, thái mỏng đập dập, chần lướt qua nước sôi để giữ nguyên màu hồng đào mướt mắt và vị ngọt nguyên bản." },
      
      { name: "Phở Tái Lăn", desc: "Thịt xào lăn tỏi mỡ bò thơm nức", price: "65.000Đ", img: "/pho_tai_lan_88ede7f3ec9d48298d30def92396b74e.jpg", hoverInfo: "Thịt bò xào cháy tỏi trên lửa lớn, quyện vào nước phở tạo lớp mỡ óng ánh, thơm lừng béo ngậy. Tuyệt chiêu trị đói buổi sáng!" },
      
      { name: "Phở Tái Nạm", desc: "Thịt tái mềm và nạm béo", price: "65.000Đ", img: "/photainam.png", hoverInfo: "Miếng tái mỏng tang quyện cùng dải nạm dắt mỡ vàng ươm, húp một ngụm nước dùng mọng mỡ, bạn sẽ hiểu thế nào là tinh hoa." },
      
      { name: "Phở Tái Gầu", desc: "Tái mềm và gầu giòn tan", price: "70.000Đ", img: "/unnamed.jpg", /* THIẾU ẢNH */ hoverInfo: "Tuyệt đỉnh tương phản: tái mềm như lụa ăn kèm miếng gầu mỡ giòn sần sật, béo mà không ngấy." },
      
      { name: "Phở Tái Bò Viên", desc: "Thịt tái và bò viên thủ công", price: "65.000Đ", img: "/IMG_7750 (1).jpg", /* THIẾU ẢNH */ hoverInfo: "Kết hợp giữa thịt tái ngọt lịm và viên bò quết tay giòn dai, cắn một miếng sực sực rất đã miệng." },
      
      { name: "Phở Chín", desc: "Thịt chín thái mỏng bản to", price: "60.000Đ", img: "/z5194034611220-ffd8860795f1aee6b8f876d0a2286d67.jpg", hoverInfo: "Hương vị quốc dân. Thịt chín luộc kỹ, thái mỏng tang, giữ được độ mềm và hương thơm bò luộc nức mũi." },
      
      { name: "Phở Chín Gầu", desc: "Thịt chín mềm và gầu giòn", price: "70.000Đ", img: "/gau.png", hoverInfo: "Sự lựa chọn an toàn nhưng không kém phần bùng nổ, gầu giòn béo ngậy cứu vớt lại sự mộc mạc của thịt chín." },
      
      { name: "Phở Nạm", desc: "Thịt nạm sườn béo mềm", price: "60.000Đ", img: "/phonam.jpg", hoverInfo: "Phần thịt kẹp giữa những thớ mỡ, khi luộc chín có độ mềm mại tuyệt đối, ăn như tan chảy trên đầu lưỡi." },
      
      { name: "Phở Nạm Gầu", desc: "Nhân đôi độ béo ngậy", price: "70.000Đ", img: "/phonamgau.jpg", hoverInfo: "Dành cho tín đồ mê vị béo thơm của bò. Gầu giòn nạm mềm, húp cạn tô phở trong một buổi sáng trời se lạnh thì còn gì bằng." },
      
      { name: "Phở Gầu Gân", desc: "Gầu giòn và gân trong sực sực", price: "70.000Đ", img: "/ngocha7490-8368.jpg", hoverInfo: "Combo 'nhao rào rạo' cực vui miệng. Gân bò hầm trong vắt, cắn vào sần sật, ăn cùng gầu vàng óng bắt mắt." },
      
      { name: "Phở Gầu Bò Viên", desc: "Gầu mỡ giòn và bò viên dai", price: "70.000Đ", img: "/bc062e6b454144c9bc5cbb9e7592f1e3.jpg", /* THIẾU ẢNH */ hoverInfo: "Món tủ của nhiều người trẻ. Bò viên thơm mùi tiêu, cắn dai giòn, ăn kèm dải gầu béo ngậy đậm đà." },
      
      { name: "Phở Gân", desc: "Gân bò trong veo hầm mềm", price: "60.000Đ", img: "/24126dcb7d309f6ec621-6824.jpg", /* THIẾU ẢNH */ hoverInfo: "Thanh tao và giàu collagen. Gân hầm đủ độ để không bị dai, nhai sần sật và tan nhẹ, quyện trọn nước dùng 12 tiếng." },
    ],
  },
  {
    id: "pho-ga",
    label: "Phở Gà",
    items: [
      { 
        name: "Phở Ngọc Kê", 
        desc: "Kê gà ta béo ngậy hảo hạng", 
        price: "90.000Đ", 
        img: "/ke.jpg", 
        hoverInfo: "Món ăn đại bổ, quyến rũ bởi những hạt ngọc kê bóng bẩy, cắn vào là cảm nhận ngay độ mềm mịn, tuôn trào sự béo ngậy ngập chân răng nhưng thanh khiết vô cùng. Nước gà trong vắt, sực nức hương lá chanh tươi." 
      },
      { 
        name: "Phở Tràng Trứng", 
        desc: "Trứng non và tràng dai giòn", 
        price: "60.000Đ", 
        img: "/trung.jpg", 
        hoverInfo: "Tô phở nức lòng người hâm mộ! Chùm trứng non lòng đào dẻo quánh, vàng ươm béo ngậy, nhai rào rạo cùng dải tràng hoa giòn sần sật. Gắp một đũa bánh phở đẫm nước dùng ngọt thanh, ngon đến mức phải hít hà." 
      },
      { 
        name: "Phở Gà Đùi Chặt", 
        desc: "Đùi gà ta chắc thịt, da giòn", 
        price: "65.000Đ", 
        img: "/dui.jpg", 
        hoverInfo: "Tuyệt phẩm gà ta thả đồi! Thịt đùi nâu hồng săn chắc mà vẫn mọng nước, ôm trọn bởi lớp da vàng ươm, giòn sực. Chấm nhẹ miếng da vào đĩa muối tiêu chanh ớt, nhấp ngụm nước phở nóng hổi, ngon quên lối về!" 
      },
      { 
        name: "Phở Gà Lòng Mề", 
        desc: "Gà ta kèm lòng mề xào giòn", 
        price: "60.000Đ", 
        img: "/long.jpg", 
        hoverInfo: "Dành riêng cho hệ 'thích nhai'! Lòng mề làm sạch bong, xào xém cạnh thơm nức mùi hành phi, nhai giòn sần sật. Quyện cùng bánh phở mềm mướt và nước dùng ngọt lịm từ xương gà, ăn một bát lại muốn gọi bát hai." 
      },
    ],
  },
  {
    id: "mon-kem",
    label: "Món Ăn Kèm",
    items: [
      { 
        name: "Nộm Gà", 
        desc: "Gà xé phay bóp thấu", 
        price: "80.000Đ", 
        img: "/nom.jpg", 
        hoverInfo: "Vị cứu tinh vị giác! Gà xé phay thấm đẫm nước mắm chua ngọt, trộn cùng hành tây giòn rụm, rau răm thơm nức và đậu phộng bùi béo. Đưa vào miệng là vị giác như bừng tỉnh, kích thích cơn thèm ăn đến tột độ." 
      },
      { 
        name: "Phở Chiên Phồng", 
        desc: "Phở cuốn chiên phồng xòa bò", 
        price: "70.000Đ", 
        img: "/cach-lam-pho-chien-phong-1_33c480ca06a54fb7ba632fa15414a854.jpg", 
        hoverInfo: "Nhìn là thèm! Những chiếc 'gối' phở chiên vàng ươm, giòn xốp bên ngoài, dẻo ẩm bên trong, đẫm mình trong lớp nước sốt sánh quyện của thịt bò xào lăn tỏi và rau cải ngọt mát. Một bản giao hưởng của kết cấu!" 
      },
      { 
        name: "Phở Cuốn", 
        desc: "Bánh phở cuốn thịt bò xào tỏi", 
        price: "60.000Đ", 
        img: "/maxresdefault.jpg", 
        hoverInfo: "Cuốn trọn tinh hoa! Lớp bánh phở mướt mát ôm lấy phần thịt bò xào tỏi xém lửa rực vị, quyện cùng xà lách thanh tân. Chấm ngập vào bát nước mắm chua ngọt thanh thanh, cắn một miếng là mát rượi cả cõi lòng." 
      },
      { 
        name: "Quẩy Nhà Làm", 
        desc: "Quẩy nóng giòn tan chiên mới", 
        price: "10.000Đ", 
        img: "/quay.jpg", 
        hoverInfo: "Linh hồn không thể thiếu! Từng chiếc quẩy béo múp, vàng ruộm, cắn giòn rụm nhưng khi dìm vào bát phở nóng lại ngậm căng nước dùng, trở nên dẻo mềm, béo ngậy. Ăn phở mà thiếu quẩy là phí mất một nửa cái ngon!" 
      },
    ],
  },
  {
    id: "do-uong",
    label: "Đồ Uống",
    items: [
      { name: "Trà Đá", price: "5.000đ", img: "/tra.png", desc: "Trà thơm mát lạnh" },
      { name: "Trà Nóng", price: "5.000đ", img: "/tra.png", desc: "Trà ướp sen Hà Nội" },
      { name: "Nước Chanh Muối", price: "20.000đ",img: "/muoi.jpg",  desc: "Giải nhiệt, giải ngán" },
      { name: "Bia Hà Nội", price: "25.000đ", img: "/bia.png", desc: "Bia lon lạnh" },
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
export const BEST_SELLERS = [
  {
    id: 1,
    name: "Phở Đặc Biệt",
    desc: "Tái, chín, nạm, gầu, gân, bò viên",
    price: "120.000Đ",
    img: "/phodacbiet.png", 
  },
  {
    id: 2,
    name: "Phở Lõi Rùa",
    desc: "Phần thịt bắp rùa giòn sần sật",
    price: "85.000Đ",
    img: "/phobaploi.png",
  },
  {
    id: 3,
    name: "Phở Tái Lăn",
    desc: "Bò xào lăn tỏi mỡ thơm nức mũi",
    price: "65.000Đ",
    img: "/pho_tai_lan_88ede7f3ec9d48298d30def92396b74e.jpg", // Đã lấy đúng link ảnh bạn vừa cập nhật
  }
];