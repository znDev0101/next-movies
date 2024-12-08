"use client";

import { menuNavDropDown } from "@/types/menuNav";
import React, { useState } from "react";
import DropdownItemMobile from "./DropdownItemMobile";

const MenuNavMobile = ({ data }: { data: menuNavDropDown }) => {
  const [isShowItemDropdown, setIsShowItemDropdown] = useState<boolean>(false);
  const { IconDown, IconNav } = data;

  return (
    <li className="my-3 flex flex-col duration-200">
      <div
        className="flex items-center justify-between"
        onClick={() => setIsShowItemDropdown(!isShowItemDropdown)}
      >
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6">
            <IconNav className="h-full w-full" />
          </div>
          <span>{data.nameNav}</span>
        </div>
        <IconDown />
      </div>
      {isShowItemDropdown &&
        data.menuDropDown.map((data, i) => {
          return <DropdownItemMobile data={data} key={i} />;
        })}
    </li>
  );
};

export default MenuNavMobile;
