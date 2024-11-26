"use client";

import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { RiMovie2Line } from "react-icons/ri";
import { TfiHome } from "react-icons/tfi";
import Link from "next/link";
import SearchBarNav from "../ui/SearchBarNav";
import MobileMenu from "../MobileMenu";
import { usePathname } from "next/navigation";
import { dataMenuNavbar } from "@/data/dataMenuNavbar";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("../ui/ThemeSwitch"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="w fixed top-0 z-50 flex w-full items-center gap-x-3 border-b border-gray-400 bg-white px-2 py-2 dark:bg-[#181C14] lg:justify-between lg:px-5 lg:py-2">
        <nav className="relative flex items-center gap-x-7">
          <Link href={"/"}>
            <RiMovie2Line className="text-4xl" />
          </Link>
          <ul className="hidden gap-x-7 font-semibold lg:flex">
            <li
              className={`hover:cursor-pointer ${
                pathname === "/" && "bg-gray-100 px-4 py-2 dark:bg-[#4e5744]"
              } rounded-md`}
            >
              <Link href={"/"} className="flex items-center gap-x-3 text-lg">
                <TfiHome className="font-bold" />
                Home
              </Link>
            </li>
            {dataMenuNavbar.map((data, i) => {
              const { IconNav, IconDown } = data;
              const [isShowDropDown, setIsShowDropDown] =
                useState<boolean>(false);

              return (
                <li
                  key={i}
                  className={`rounded-md px-4 py-2 duration-200 after:absolute after:h-4 after:w-36 after:content-[""] hover:bg-gray-100 dark:hover:dark:bg-[#3C3D37]`}
                  onMouseEnter={() => setIsShowDropDown(!isShowDropDown)}
                  onMouseLeave={() => setIsShowDropDown(!isShowDropDown)}
                >
                  <div className="flex items-center gap-x-3 text-lg hover:cursor-pointer">
                    <IconNav className="text-2xl" />
                    {data.nameNav}
                    <IconDown />
                  </div>
                  {isShowDropDown && (
                    <div
                      className={`absolute left-0 top-[3.3rem] grid w-[47rem] scale-0 grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 rounded-lg border border-gray-300 bg-white p-5 shadow-lg dark:bg-[#181C14] ${
                        isShowDropDown && "scale-100"
                      } duration-200`}
                    >
                      <div className="col-[1/3] flex flex-col">
                        <div className="flex items-center gap-x-5 text-xl">
                          <IconNav />
                          {data.nameNav}
                        </div>
                        <p className="text-gray-800 dark:text-white">
                          {data.description}
                        </p>
                      </div>
                      {data.menuDropDown.map((data, i) => {
                        const { Icon } = data;
                        return (
                          <div className="flex flex-col gap-y-2" key={i}>
                            <div className="flex items-center gap-x-3">
                              <Icon />
                              {data.nameDropDown}
                            </div>
                            <p className="line-clamp-2 text-gray-500 dark:text-gray-300">
                              {data.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="xs:w-full flex items-center justify-end gap-x-3">
          <SearchBarNav />
          <ThemeSwitch />
          <MobileMenu />
        </div>
      </header>
      <MenuBar />
    </>
  );
};

export default Navbar;
