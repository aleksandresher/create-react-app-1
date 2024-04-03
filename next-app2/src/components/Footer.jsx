import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex  p-3 items-center  bg-[#131313] h-[80px]">
      <div className="flex justify-start gap-11 w-1/3 pl-4  ">
        <button className="text-gray-400">Terms & Privacy</button>
        <button className="text-gray-400">Security</button>
      </div>

      <nav className="w-1/2">
        <ul className="flex gap-4 items-center justify-between">
          <li>
            <Link href="/" className="text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/Products" className="text-gray-400">
              Products
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex w-1/3 items-center justify-end gap-6 pr-[100px]">
        <Link href="https://www.youtube.com/">
          <img
            src="/youtube-icon.png"
            alt="youtube-icon"
            className="w-[40px] h-[40px]"
          />
        </Link>

        <Link href="https://facebook.com/">
          <img
            src="./fb-icon.png"
            alt="facebook-icon"
            className="w-[40px] h-[40px]"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
