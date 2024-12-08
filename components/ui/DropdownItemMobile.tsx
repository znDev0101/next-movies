import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface DropdownProps {
  nameDropDown: string;
  description: string;
  typeLink?: string;
  Icon: IconType;
}

const DropdownItemMobile = ({ data }: { data: DropdownProps }) => {
  const { Icon } = data;

  return (
    <Link
      href={`/${data.typeLink}/${data.nameDropDown.replace(/\s+/g, "").toLocaleLowerCase()}`}
      className="ms-6 flex gap-x-2 text-black dark:text-white"
    >
      <div className="h-5 w-5">
        <Icon className="h-full w-full" />
      </div>
      {data.nameDropDown}
    </Link>
  );
};

export default DropdownItemMobile;
