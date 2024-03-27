import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-1/3 pr-[100px]">
      <ul className="flex justify-between gap-2 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Blog
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <img
              src={process.env.PUBLIC_URL + "./assets/shopping-cart.png"}
              alt="cart"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
