"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMonitor, PiSun } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  extendVariants,
} from "@nextui-org/react";
import { IconType } from "react-icons";

interface ThemeData {
  theme: string;
  titleTheme: string;
  Icon: IconType;
}

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const dataThemes: ThemeData[] = [
    {
      titleTheme: "System",
      theme: "system",
      Icon: PiMonitor,
    },
    {
      titleTheme: "Light",
      theme: "light",
      Icon: PiSun,
    },
    {
      titleTheme: "Dark",
      theme: "dark",
      Icon: FaMoon,
    },
  ];

  const MyButton = extendVariants(Button, {
    variants: {
      size: {
        xs: "px-2 min-w-10 h-10 text-tiny gap-1 rounded-small",
        md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
        xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  });

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <MyButton size="xs" className="items-center">
          {theme === "dark" ? (
            <FaMoon className="text-xl dark:text-white" />
          ) : theme === "light" ? (
            <PiSun className="text-xl dark:text-white" />
          ) : (
            <PiMonitor className="text-xl dark:text-white" />
          )}
        </MyButton>
      </DropdownTrigger>
      <DropdownMenu>
        {dataThemes.map((data) => {
          const { Icon } = data;

          return (
            <DropdownItem
              key={data.theme}
              onClick={() => setTheme(data.theme)}
              endContent={<Icon />}
            >
              {data.titleTheme}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeSwitch;
