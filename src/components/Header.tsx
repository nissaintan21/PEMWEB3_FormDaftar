import React from "react";
import { NavBar } from "./NavBar";  

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50">
      <NavBar />
    </header>
  );
};

export default Header;