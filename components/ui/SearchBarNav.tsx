import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
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

  const { term, handleChange } = useSearch(auto);

  return (
    <Input
      ref={inputRef}
      value={term}
      isClearable={term?.length !== 0}
      onChange={handleChange}
      placeholder="Type for search"
      classNames={{
        input: "dark:text-gray-100 placeholder:dark:text-gray-100",
        inputWrapper:
          "dark:bg-[#3C3D37] dark:hover:bg-[#4e5744] dark:focus-within:bg-[#3C3D37]",
      }}
      startContent={
        <CiSearch className="flex flex-shrink-0 text-2xl text-gray-100" />
      }
      endContent={term?.length === 0 && <p>CTRL+K</p>}
    />
  );
};

export default SearchBarNav;
