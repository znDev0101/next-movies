import { PropsMenuNav } from "@/types/PropsMenuNav";
import React, { useState } from "react";

const MenuNav = ({ data }: { data: PropsMenuNav }) => {
  const { IconNav, IconDown } = data;
  const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false);

  return (
    <li
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
          className={`absolute left-0 top-[3.3rem] z-50 grid w-[47rem] scale-0 grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 rounded-lg border border-gray-300 bg-white p-5 shadow-lg dark:bg-[#181C14] ${
            isShowDropDown && "scale-100"
          } duration-200`}
        >
          <div className="col-[1/3] flex flex-col">
            <div className="flex items-center gap-x-5 text-xl">
              <IconNav />
              {data.nameNav}
            </div>
            <p className="text-gray-800 dark:text-white">{data.description}</p>
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
};

export default MenuNav;
