import React from "react";

const Footer = () => {
  return (
    <section className="w-full flex  p-3 items-center  bg-[#131313] h-[80px] fixed bottom-0">
      <div className="flex justify-start gap-11 w-1/3 pl-4  ">
        <button className="text-gray-400">Terms & Privacy</button>
        <button className="text-gray-400">Security</button>
      </div>

      <nav className="w-1/2">
        <ul className="flex gap-4 items-center justify-between">
          <li>
            <a href="/" className="text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/About" className="text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/Products" className="text-gray-400">
              Products
            </a>
          </li>
          <li>
            <a href="/Contact" className="text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex w-1/3 items-center justify-end gap-6 pr-[100px]">
        <a href="https://www.youtube.com/">
          <img
            src={process.env.PUBLIC_URL + "./assets/youtube-icon.png"}
            alt="youtube-icon"
            className="w-[40px] h-[40px]"
          />
        </a>

        <a href="https://facebook.com/">
          <img
            src={process.env.PUBLIC_URL + "./assets/fb-icon.png"}
            alt="facebook-icon"
            className="w-[40px] h-[40px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
