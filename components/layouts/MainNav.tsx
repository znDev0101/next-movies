"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";
import { menuItemsNav } from "@/config/menuItemNav";
import { Input } from "@nextui-org/input";
import ThemeSwitcher from "../ui/ThemeSwitcher";

const MainNav = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar
      maxWidth='full'
      isBordered
      isBlurred={false}
      className='bg-white dark:bg-black'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='flex gap-x-3' justify='center'>
        <NavbarItem>
          <BiCameraMovie className='text-4xl' />
        </NavbarItem>
        {/* Drop down for desktop */}
        {menuItemsNav.map((data, i) => {
          return (
            <Dropdown>
              <NavbarItem
                className='hidden lg:ms-5 lg:block hover:bg-gray-100 hover:dark:bg-gray-900 px-2 rounded-xl duration-200'
                key={i}
              >
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className='p-0 bg-transparent data-[hover=true]:bg-transparent'
                    startContent={<data.iconMenu className='text-2xl' />}
                    endContent={<data.buttonDropDown />}
                    radius='sm'
                    variant='light'
                  >
                    {data.menuName}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label='ACME features'
                className='w-[340px]'
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {data.dropDownMenu.map((data, i) => {
                  return (
                    <DropdownItem key={i} description={data.description}>
                      {data.menuNameDrowdown}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          );
        })}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='flex lg:w-[30%]'>
          <Input
            className='w-full'
            placeholder='Type to search...'
            size='sm'
            startContent={<IoSearchOutline />}
            type='search'
          />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <NavbarMenuToggle
            className='lg:hidden'
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarItem>
      </NavbarContent>
      {/* Navbar menu for mobile */}
      <NavbarMenu className='bg-white flex items-end'>
        {menuItemsNav.map((data, index) => (
          <NavbarMenuItem key={`${data}-${index}`}>
            <Link className='w-full' href='#'>
              {data.menuName}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNav;
