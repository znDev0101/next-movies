import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { FiTrendingUp } from "react-icons/fi";
import useDebounce from "@/hooks/useDebounce";
import CardSearchTrending from "./CardSearchTrending";
import ModalSearchTrending from "./ModalSearchTrending";

const SearchBarNav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useHotkeys("ctrl+k", () => onOpen());

  return (
    <>
      <Button
        onPress={onOpen}
        className="flex w-4/5 items-center justify-start gap-x-4 rounded-lg bg-gray-100 font-semibold text-gray-500 dark:bg-[#3C3D37] lg:w-80 lg:justify-between"
      >
        <CiSearch className="text-xl dark:text-white lg:text-3xl" />
        <span className="text-xs dark:text-white lg:text-lg">
          Search for Movies...
        </span>
        <span className="hidden font-semibold dark:text-white lg:block">
          CTRL+K
        </span>
      </Button>
      <ModalSearchTrending isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default SearchBarNav;
