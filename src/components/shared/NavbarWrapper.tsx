"use client";

import { usePathname } from "next/navigation";
import Navbar2 from "./Navbar-2";
import Navbar from "./NavbarPage1-2";
import {  ReactElement } from "react";

const NavbarWrapper = (): ReactElement => {
  const pathname: string = usePathname();

  let navbarComponent: ReactElement;

  switch (pathname) {
    case "/home-page-2":
    case "/about-us-2":
    case "/contact-us-2":
      navbarComponent = <Navbar2 />;
      break;
    default:
      navbarComponent = <Navbar />;
  }

  return <>{navbarComponent}</>;
};

export default NavbarWrapper;
