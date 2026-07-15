import type { Landmark } from "@/types";

export const landmarks: Landmark[] = [
  {
    viName: "Khám Lớn",
    enName: "Grand Prison",
    description: {
      vi: "Minh chứng cho sự kiên cường và hy sinh trong hành trình đấu tranh giành độc lập.",
      en: "A testament to resilience and sacrifice on the long road to independence.",
    },
    color: "var(--color-terracotta)",
    photo: "/landmarks/kham-lon.jpg",
  },
  {
    viName: "Bến Ninh Kiều",
    enName: "Ninh Kieu Wharf",
    description: {
      vi: "Trái tim của Cần Thơ — nơi hội tụ đời sống sông nước, giao thương và văn hóa.",
      en: "The heart of Can Tho — where river life, trade, and culture come together.",
    },
    color: "var(--color-slate-blue)",
    photo: "/landmarks/ben-ninh-kieu.jpg",
  },
  {
    viName: "Chợ Nổi Cái Răng",
    enName: "Cai Rang Floating Market",
    description: {
      vi: "Khu chợ nổi được UNESCO công nhận, rực rỡ sắc màu và đậm chất truyền thống miền Tây.",
      en: "A UNESCO-recognised floating market, bursting with colour and Mekong Delta tradition.",
    },
    color: "var(--color-teal)",
    photo: "/landmarks/cho-noi-cai-rang.jpg",
  },
  {
    viName: "Chùa Ông",
    enName: "Ông Temple",
    description: {
      vi: "Ngôi chùa cổ kính thế kỷ 19, mang kiến trúc Quảng Đông hòa quyện tín ngưỡng bản địa.",
      en: "A 19th-century temple blending Cantonese architecture with local belief.",
    },
    color: "var(--color-ochre)",
    photo: "/landmarks/chua-ong.jpg",
  },
  {
    viName: "Bảo tàng Cần Thơ",
    enName: "Can Tho Museum",
    description: {
      vi: "Lưu giữ lịch sử tự nhiên, dấu ấn cách mạng và bản sắc văn hóa sông nước đồng bằng.",
      en: "Keeper of natural history, revolutionary heritage, and the delta's river culture.",
    },
    color: "var(--color-olive)",
    photo: "/landmarks/bao-tang-can-tho.jpg",
  },
];
