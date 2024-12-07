import { Link } from "@nextui-org/react";
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
    <li className="my-5">
      <Link
        href={`/${data.typeLink}/${data.nameDropDown.replace(/\s+/g, "").toLocaleLowerCase()}`}
        className="flex gap-x-3 text-white"
      >
        <div className="h-5 w-5">
          <Icon className="h-full w-full" />
        </div>
        {data.nameDropDown}
      </Link>
    </li>
  );
};

export default DropdownItemMobile;
