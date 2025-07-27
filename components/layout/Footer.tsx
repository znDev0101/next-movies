import { dataMenuNavbar } from "@/data/dataMenuNavbar";
import { menuNavDropDown } from "@/types/menuNav";
import Link from "next/link";
import React from "react";
import { IoLogoVercel } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { SiNextdotjs, SiNextui } from "react-icons/si";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 flex w-full flex-col border-t-1 border-gray-300 dark:border-gray-800 lg:gap-y-7">
      <div className="items-star flex w-full px-5 py-10 lg:px-20">
        <PiFilmSlate className="text-3xl" />
        <div className="ms-72 hidden gap-x-80 lg:flex">
          {dataMenuNavbar.map((data: menuNavDropDown, i: number) => {
            return (
              <div key={i}>
                <h1 className="w-max text-2xl font-semibold">{data.nameNav}</h1>
                <ul>
                  {data.menuDropDown.map((data, i) => {
                    return (
                      <li
                        className="my-2 text-gray-700 dark:text-gray-300"
                        key={i}
                      >
                        <Link
                          href={`/${data.typeLink}/${data.nameDropDown.replace(/\s+/g, "").toLocaleLowerCase()}`}
                        >
                          {data.nameDropDown}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-5 my-10 flex flex-col gap-y-7 lg:ms-20">
        <p>
          <span className="font-semibold">
            &copy; {getCurrentYear} Zulfa Nurhuda
          </span>{" "}
          - All rights reserved. <br />
          <span className="flex flex-wrap items-center gap-x-2">
            Built with
            <span className="flex items-center gap-x-1 font-semibold">
              <SiNextdotjs /> Next.js
            </span>
            and
            <span className="flex items-center gap-x-1 font-semibold">
              <SiNextui /> NextUI.
            </span>
            Powered by
            <span className="flex items-center gap-x-1 font-semibold">
              <IoLogoVercel /> Vercel.
            </span>
          </span>
        </p>
        <h1>
          Data provided by <span>TMDB.</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
