import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavbarWrapper from "@/components/shared/NavbarWrapper"; // New Client Component
import Footer from "@/components/shared/Footer";
import NavbarWrapper from "@/components/shared/NavbarWrapper";

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
  title: "Seom",
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
        <NavbarWrapper />

        {/* Main Content */}
        {children}

        {/* ✅ Footer is removed if `NavbarWrapper` decides */}
        <Footer />
      </body>
    </html>
  );
}
