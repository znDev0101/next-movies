import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface IDataDropDown {
  nameDropDown: string;
  description: string;
  typeLink?: string;
  Icon: IconType;
}

interface DropdownProps {
  data: IDataDropDown;
  isShowItemDropdown: boolean;
}

const DropdownItemMobile = ({ data, isShowItemDropdown }: DropdownProps) => {
  const { Icon } = data;

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isShowItemDropdown ? "mt-4 max-h-20" : "max-h-0"
      }`}
    >
      <Link
        href={`/${data.typeLink}/${data.nameDropDown.replace(/\s+/g, "").toLowerCase()}`}
        className="ms-6 flex gap-x-2 font-semibold text-black dark:text-white"
      >
        <div className="h-5 w-5">
          <Icon className="h-full w-full" />
        </div>
        {data.nameDropDown}
      </Link>
    </div>
  );
};

export default DropdownItemMobile;
