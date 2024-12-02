import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { FaCircleXmark } from "react-icons/fa6";

import React, { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import useSearch from "@/hooks/useSearch";

const SearchBarNav = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys("ctrl+k", (event: KeyboardEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const auto = true;

  const { term, handleChange, clearSearchQuery } = useSearch(auto);

  return (
    <Input
      ref={inputRef}
      value={term}
      onChange={handleChange}
      placeholder="Type for search"
      classNames={{
        input:
          "dark:text-gray-100 placeholder:dark:text-gray-100 placeholder:font-semibold",
        inputWrapper:
          "dark:bg-[#3C3D37] dark:hover:bg-[#4e5744] dark:focus-within:bg-[#3C3D37]",
      }}
      startContent={
        <CiSearch className="flex flex-shrink-0 text-2xl text-gray-700 dark:text-white" />
      }
      endContent={
        term.length === 0 ? (
          <p className="hidden text-gray-700 dark:text-white lg:block">
            CTRL+K
          </p>
        ) : (
          <FaCircleXmark
            onClick={clearSearchQuery}
            className="text-xl text-gray-500 hover:cursor-pointer dark:text-white"
          />
        )
      }
    />
  );
};

export default SearchBarNav;
