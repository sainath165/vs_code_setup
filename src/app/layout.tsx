import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/page";
import Footer from "./Footer/page";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>

      </body>
    </html>
  );
}

