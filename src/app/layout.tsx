import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import localFont from "next/font/local";
import '@/styles/global.css';
import NavHeader from '@/components/NavHeader/NavHeader';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: "CANVOYA",
  description: "Travel souvenir books from Can Tho",
};

const gesco = localFont({
  src: "../../public/fonts/1FTV-HF-Gesco.ttf",
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gesco.variable}>
      <body>
        <NavHeader/>
        {children}  
        <Footer/>
      </body>
    </html>
  );
}
