"use client";

import React, { Suspense } from "react";
import { TfiHome } from "react-icons/tfi";
import Link from "next/link";
import SearchBarNav from "../ui/SearchBarNav";
import MobileMenu from "../MobileMenu";
import { usePathname } from "next/navigation";
import { dataMenuNavbar } from "@/data/dataMenuNavbar";
import dynamic from "next/dynamic";
import MenuNav from "../MenuNav";
import { PiFilmSlate } from "react-icons/pi";

const ThemeSwitch = dynamic(() => import("../ui/ThemeSwitch"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="w fixed top-0 z-50 flex w-full items-center gap-x-3 border-b border-gray-400 bg-white px-2 py-2 dark:bg-[#181C14] lg:justify-between lg:px-5 lg:py-2">
        <nav className="relative flex items-center gap-x-7">
          <Link href={"/"}>
            <PiFilmSlate className="text-4xl" />
          </Link>
          <ul className="hidden items-center gap-x-7 font-semibold lg:flex">
            <li
              className={`${pathname === "/" ? "bg-gray-100 dark:bg-[#3C3D37]" : "hover:bg-gray-100 dark:hover:bg-[#3C3D37]"} rounded-md px-4 py-2 hover:cursor-pointer`}
            >
              <Link href={"/"} className="flex items-end gap-x-3">
                <TfiHome className="text-2xl font-bold" />
                Home
              </Link>
            </li>
            {dataMenuNavbar.map((data, i: number) => {
              return <MenuNav data={data} key={i} />;
            })}
          </ul>
        </nav>
        <div className="flex w-full items-center justify-end gap-x-2 lg:w-[27rem]">
          <Suspense>
            <SearchBarNav />
          </Suspense>
          <ThemeSwitch />
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default Navbar;
