import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/commonHeader/header";
import Footer from "@/components/commonFooter/footer";

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
    <html lang="en">
      <body>
        <Header/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
