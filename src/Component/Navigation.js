import React from "react";
import { NavLink } from "react-router-dom";
import DarkProvider from "./DarkMode/DarkProvider";

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">🦋 AartiApp</div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/product" className="nav-link">
            Product
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <DarkProvider>
            <NavLink to="/header" className="nav-link">
              Header
            </NavLink>
          </DarkProvider>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
