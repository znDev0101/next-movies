import { Button } from "@nextui-org/button";
import React from "react";

import { HiMenu } from "react-icons/hi";

const MobileMenu = () => {
  return (
    <Button className="lg:hidden" isIconOnly>
      <HiMenu className="text-xl" />
    </Button>
  );
};

export default MobileMenu;
