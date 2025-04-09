"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/NavbarHomePage1-2";
import Navbar2 from "./Navbar-2";


export default function NavbarWrapper() {
  const pathname = usePathname();

  return (
    <>
      {/* Show Navbar2 only for /home2, otherwise show Navbar */}
      {pathname === "/home-page-2" ? <Navbar2 /> : <Navbar />}
    </>
  );
}
