import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "@/components/commonHeader/header";
import Footer from "@/components/commonFooter/footer";
import AwardsSection from '@/components/awardSection/awardsSection'


export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "By Suraj Kushwah",
  icons: {
    icon: '/favicon-e.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header/>
          <div>{children}</div>
          <AwardsSection/>
        <Footer/>
      </body>
    </html>
  );
}
