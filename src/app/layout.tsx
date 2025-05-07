import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavbarPage1-2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata should only be in a server component
export const metadata: Metadata = {
  title: "Elegant Web Studio",
  description: "Advertising Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar Logic Moved to Client Component */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* ✅ Footer is removed if `NavbarWrapper` decides */}
        <Footer />
      </body>
    </html>
  );
}
