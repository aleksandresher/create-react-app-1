import React from "react";

const NavBar = () => {
  return (
    <nav className="w-1/2 pr-[200px]">
      <ul className="flex justify-between gap-2 ">
        <li>
          <a
            href="/"
            className="text-black  hover:underline underline-offset-2  "
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-black  hover:underline underline-offset-2 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/products"
            className="text-black  hover:underline underline-offset-2 "
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-black  hover:underline underline-offset-2 "
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
