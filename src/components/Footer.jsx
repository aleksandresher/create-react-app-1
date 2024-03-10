import React from "react";
import fb_icon from "../assets/fb-icon.png";
import youtube_icon from "../assets/youtube-icon.png";

const Footer = () => {
  return (
    <section className="w-full flex absolute bottom-0 p-8 items-center justify-between bg-[#f48c06] h-[60px]">
      <div className="flex items-start gap-8 ">
        <button className="text-white">წესები და პირობები</button>
        <button className="text-white">კონფიდენციალურობის პოლიტიკა</button>
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="https://www.youtube.com/">
              <img
                src={youtube_icon}
                alt="youtube-icon"
                className="w-[40px] h-[40px]"
              />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              <img
                src={fb_icon}
                alt="facebook-icon"
                className="w-[40px] h-[40px]"
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Footer;
