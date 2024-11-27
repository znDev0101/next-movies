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
import MenuNav from "../MenuNav";

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
              return <MenuNav data={data} key={i} />;
            })}
          </ul>
        </nav>
        <div className="flex w-full items-center justify-end gap-x-3 lg:w-[27rem]">
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
