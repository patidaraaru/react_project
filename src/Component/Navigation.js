import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "./Auth/LoginContext";

const Navigation = () => {
  const { logout, user } = useContext(LoginContext);
  return (
    <div>
      <header className="header">
        <div className="logo">🦋App</div>
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
          <NavLink to="/wish-list" className="nav-link">
            WishList
          </NavLink>
          <NavLink to="/add-cart" className="nav-link">
           Add to cart
          </NavLink>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
