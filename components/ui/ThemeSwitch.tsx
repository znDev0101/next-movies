"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useTheme } from "next-themes";
import { PiMonitor, PiSun } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { Select, SelectItem } from "@nextui-org/select";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const dataThemes = [
    {
      titleTheme: "System",
      theme: "system",
      icon: <PiMonitor />,
    },
    {
      titleTheme: "Light",
      theme: "light",
      icon: <PiSun />,
    },
    {
      titleTheme: "Dark",
      theme: "dark",
      icon: <FaMoon />,
    },
  ];

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select
      value={theme}
      defaultSelectedKeys={[`${theme}`]}
      selectorIcon={
        theme === "light" ? (
          <PiSun />
        ) : theme === "dark" ? (
          <FaMoon />
        ) : (
          <PiMonitor />
        )
      }
      classNames={{
        base: "w-12 lg:w-32",
        listboxWrapper: "w-max",
      }}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}
      disableSelectorIconRotation
    >
      {dataThemes.map((data) => (
        <SelectItem
          key={data.theme}
          value={data.theme}
          classNames={{
            base: "dark:bg-[#3C3D37]",
          }}
          endContent={window.innerWidth > 430 && data.icon}
        >
          {window.innerWidth < 430 ? data.icon : data.titleTheme}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ThemeSwitch;
