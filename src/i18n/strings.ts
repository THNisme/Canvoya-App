import type { Localized } from "@/types";

/** Bilingual UI copy for the redesigned landing page (chrome + section headers). */
export const strings = {
  nav: {
    book: { vi: "Cuốn sách", en: "The Book" },
    destination: { vi: "Địa danh", en: "Destinations" },
    about: { vi: "Đội ngũ", en: "Team" },
    blog: { vi: "Blog", en: "Blog" },
    faq: { vi: "Hỏi & Đáp", en: "FAQ" },
    buy: { vi: "MUA NGAY", en: "BUY NOW" },
  },
  hero: {
    eyebrow: { vi: "Canvoya giới thiệu", en: "Canvoya presents" },
    letter: { vi: "Một lá thư gửi lại", en: "A letter sent back" },
    ninhKieuCaption: { vi: "Bến Ninh Kiều, 2026", en: "Ninh Kieu Wharf, 2026" },
    binhThuyCaption: { vi: "ĐÌNH BÌNH THỦY", en: "BINH THUY TEMPLE" },
    country: { vi: "VIỆT NAM", en: "VIETNAM" },
    postmark: { vi: "CẦN THƠ", en: "CAN THO" },
    floatingMarketCaption: { vi: "chợ nổi, sớm mai", en: "floating market, early morning" },
    ticketLabel: { vi: "VÉ LƯU NIỆM", en: "KEEPSAKE TICKET" },
    ticketCopy: { vi: "Một chuyến về miền Tây", en: "A journey through the Mekong Delta" },
    tagline: {
      vi: "Chạm vào trang sách, chạm lại chuyến đi.",
      en: "Touch the pages, touch the journey again.",
    },
    explore: { vi: "Khám phá cuốn sách", en: "Explore the book" },
    buy: { vi: "Mua ngay", en: "Buy now" },
    scroll: { vi: "Cuộn xuống", en: "Scroll down" },
  },
  product: {
    eyebrow: { vi: "Về sản phẩm", en: "About the product" },
    title: { vi: "Hơn cả một cuốn sách", en: "More than a book" },
    description: {
      vi: "Dear Tho không chỉ là tập hợp hình ảnh và thông tin — đó là một kỷ vật cá nhân cho ký ức chuyến đi, được thiết kế để tạo nên trải nghiệm tương tác sâu sắc.",
      en: "Dear Tho is more than a collection of photos and facts — it is a personal keepsake for your travel memories, designed to create a deeply interactive experience.",
    },
    highlight: {
      vi: "Sách bao gồm hình ảnh đẹp, thông tin lịch sử, không gian viết nhật ký, túi nhựa trong để lưu ảnh cá nhân và các trò chơi tương tác.",
      en: "The book includes beautiful imagery, historical notes, journaling space, a clear pocket for personal photos, and interactive games.",
    },
    dimensions: { vi: "Kích thước", en: "Dimensions" },
    pages: { vi: "Số trang", en: "Pages" },
    pageCount: { vi: "40 trang", en: "40 pages" },
    style: { vi: "Phong cách", en: "Style" },
    vintage: { vi: "Hoài cổ", en: "Vintage" },
    print: { vi: "In ấn", en: "Print" },
    caption: {
      vi: "Dear Tho — bản in đầu tiên",
      en: "Dear Tho — first edition",
    },
    previous: { vi: "Trước", en: "Previous" },
    next: { vi: "Sau", en: "Next" },
    cover: { vi: "Bìa trước", en: "Front cover" },
    backCover: { vi: "Bìa sau", en: "Back cover" },
    spread: { vi: "Trang {left}–{right}", en: "Pages {left}–{right}" },
  },
  destination: {
    eyebrow: { vi: "5 Địa danh", en: "5 Destinations" },
    title: {
      vi: "Năm câu chuyện, một hành trình",
      en: "Five stories, one journey",
    },
    subtitle: {
      vi: "Xuôi dòng Mekong, năm điểm dừng chân.",
      en: "Down the Mekong — five stops along the way.",
    },
    country: { vi: "VIỆT NAM", en: "VIETNAM" },
  },
  about: {
    eyebrow: { vi: "Về chúng tôi", en: "About us" },
    title: {
      vi: "Đội ngũ đứng sau Dear Tho",
      en: "The team behind Dear Tho",
    },
    subtitle: {
      vi: "Sáu con người phía sau từng trang sách.",
      en: "The six people behind every page.",
    },
  },
  faq: {
    eyebrow: { vi: "Hỏi & Đáp", en: "FAQ" },
    title: {
      vi: "Câu hỏi thường gặp",
      en: "Frequently asked questions",
    },
    subtitle: {
      vi: "Những điều cần biết về Dear Tho.",
      en: "Everything you need to know about Dear Tho.",
    },
  },
  blog: {
    description: {
      vi: "Những câu chuyện từ hành trình · phía sau mỗi trang sách Dear Tho",
      en: "Stories from the journey · behind every page of Dear Tho",
    },
  },
  footer: {
    tagline: {
      vi: "Chạm vào trang sách, chạm lại chuyến đi.",
      en: "Touch the pages, touch the journey again.",
    },
    caption: {
      vi: "Một dự án của sinh viên Đại học FPT cho môn học EXE.",
      en: "A project by FPT University students for the EXE course.",
    },
    productHeading: { vi: "Sản phẩm", en: "Product" },
    aboutHeading: { vi: "Về chúng tôi", en: "About us" },
    linkOrder: { vi: "Đặt hàng", en: "Order" },
    linkFaq: { vi: "Câu hỏi thường gặp", en: "FAQ" },
    linkTeam: { vi: "Đội ngũ", en: "Team" },
    madeIn: {
      vi: "Được làm bằng tình yêu tại Cần Thơ",
      en: "Made with care in Cần Thơ",
    },
  },
} satisfies Record<string, Record<string, Localized>>;
