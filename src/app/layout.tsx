import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif, Be_Vietnam_Pro } from "next/font/google";
import '@/styles/global.css';
import NavHeader from '@/components/NavHeader/NavHeader';
import Footer from '@/components/Footer/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: "CANVOYA",
  description: "Sách lưu niệm du lịch Cần Thơ",
};

const gesco = localFont({
  src: "../../public/fonts/1FTV-HF-Gesco.ttf",
  variable: "--font-display",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${gesco.variable} ${notoSerif.variable} ${beVietnamPro.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <LanguageProvider>
          <NavHeader/>
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
