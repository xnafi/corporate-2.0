"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Navbar2 from "@/components/view/Navbar2";

export default function NavbarWrapper() {
  const pathname = usePathname();

  return (
    <>
      {/* Show Navbar2 only for /home2, otherwise show Navbar */}
      {pathname === "/home2" ? <Navbar2 /> : <Navbar />}
      
    </>
  );
}
