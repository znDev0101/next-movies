"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='mt-1'>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <FaMoon className='text-2xl' />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <MdLightMode className='text-3xl' />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
