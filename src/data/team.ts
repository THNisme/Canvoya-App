import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Nguyễn Thị Nhã Tuyến",
    role: { vi: "Trưởng nhóm", en: "Team Lead" },
    quote: {
      vi: "Mỗi trang sách là một quyết định — mình chỉ ở đó để giữ cả nhóm đi đúng hướng.",
      en: "Every page is a decision — I'm just here to keep the team pointed the right way.",
    },
    initials: "NT",
    accentColor: "var(--color-terracotta)",
    photo: "/avatars/tuyen.jpg",
  },
  {
    id: 2,
    name: "Trần Hiếu Nghĩa",
    role: { vi: "Kỹ thuật", en: "Engineering" },
    quote: {
      vi: "Công nghệ tốt nhất là thứ bạn không nhận ra mình đang dùng.",
      en: "The best technology is the kind you never notice you're using.",
    },
    initials: "HN",
    accentColor: "var(--color-slate-blue)",
    photo: "/avatars/hieu-nghia.jpg",
  },
  {
    id: 3,
    name: "Nguyễn Minh Thư",
    role: { vi: "Thiết kế", en: "Design" },
    quote: {
      vi: "Cái đẹp nằm ở chi tiết — từng đường viền, từng khoảng trắng đều có lý do.",
      en: "Beauty lives in the details — every line and every margin has a reason.",
    },
    initials: "MT",
    accentColor: "var(--color-teal)",
    photo: "/avatars/minh-thu.jpg",
  },
  {
    id: 4,
    name: "Ngô Hoàng Ngọc Nhi",
    role: { vi: "Truyền thông", en: "Communications" },
    quote: {
      vi: "Một câu chuyện hay chỉ thật sự sống khi được kể đúng người.",
      en: "A good story only comes alive when it reaches the right people.",
    },
    initials: "NN",
    accentColor: "var(--color-ochre)",
    photo: "/avatars/ngoc-nhi.jpg",
  },
  {
    id: 5,
    name: "Đào Thị Anh Thư",
    role: { vi: "Thương mại", en: "Business" },
    quote: {
      vi: "Sản phẩm tốt phải đến được tay người thật sự trân trọng nó.",
      en: "A good product has to reach the people who'll truly treasure it.",
    },
    initials: "AT",
    accentColor: "var(--color-olive)",
    photo: "/avatars/anh-thu.jpg",
  },
  {
    id: 6,
    name: "Vưu Thanh Thư",
    role: { vi: "Tài chính", en: "Finance" },
    quote: {
      vi: "Đằng sau mỗi cuốn sách đẹp là một kế hoạch được tính toán kỹ lưỡng.",
      en: "Behind every beautiful book is a carefully balanced plan.",
    },
    initials: "TT",
    accentColor: "var(--color-primary)",
    photo: "/avatars/thanh-thu.jpg",
  },
];
