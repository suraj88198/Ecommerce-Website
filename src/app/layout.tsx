import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
        <div>{children}</div>
      </body>
    </html>
  );
}
