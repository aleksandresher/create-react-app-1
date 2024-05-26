"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import SunIcon from "../../../public/SunIcon.png";
import SunDark from "../../../public/sun-dark.png";
import defaultImg from "../../../public/fb-icon.png";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted)
    return (
      <Image
        src={SunDark}
        width={26}
        height={26}
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <Image
        src={SunIcon}
        alt="sun"
        width={26}
        height={26}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Image
        src={SunDark}
        alt="moon"
        width={26}
        height={26}
        onClick={() => setTheme("dark")}
      />
    );
  }

  return null;
};

export default ThemeSwitcher;
