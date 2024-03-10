import React from "react";

const NavBar = () => {
  return (
    <nav className="w-1/2">
      <ul className="flex justify-between ">
        <li>
          <a href="/">მთავარი</a>
        </li>
        <li>
          <a href="/about">ჩვენს შესახებ</a>
        </li>
        <li>
          <a href="/products">პროდუქტები</a>
        </li>
        <li>
          <a href="/contact">კონტაქტი</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
