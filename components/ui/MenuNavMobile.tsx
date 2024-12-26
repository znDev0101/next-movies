"use client";

import { menuNavDropDown } from "@/types/menuNav";
import React, { useState } from "react";
import DropdownItemMobile from "./DropdownItemMobile";

const MenuNavMobile = ({ data }: { data: menuNavDropDown }) => {
  const [isShowItemDropdown, setIsShowItemDropdown] = useState<boolean>(false);
  const { IconDown, IconNav } = data;

  return (
    <li className="my-5 flex flex-col overflow-hidden transition-all duration-200">
      <div
        className="flex items-center justify-between"
        onClick={() => setIsShowItemDropdown(!isShowItemDropdown)}
      >
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6">
            <IconNav className="h-full w-full" />
          </div>
          <span className="font-semibold">{data.nameNav}</span>
        </div>
        <IconDown
          className={`${isShowItemDropdown ? `rotate-180` : `rotate-0`} transform transition-transform duration-700`}
        />
      </div>

      {data.menuDropDown.map((data, i) => {
        return (
          <DropdownItemMobile
            data={data}
            key={i}
            isShowItemDropdown={isShowItemDropdown}
          />
        );
      })}
    </li>
  );
};

export default MenuNavMobile;
