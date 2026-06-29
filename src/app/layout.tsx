import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from "next/font/local";
import '@/styles/global.css';
import NavHeader from '@/components/NavHeader';

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
      </body>
    </html>
  );
}
