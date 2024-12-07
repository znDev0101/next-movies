import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Link } from "@nextui-org/react";
import React from "react";

import { HiMenu } from "react-icons/hi";
import { TfiHome } from "react-icons/tfi";
import { dataMenuNavbar } from "@/data/dataMenuNavbar";
import MenuNavMobile from "./ui/MenuNavMobile";

const MobileMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="lg:hidden" onClick={onOpen} isIconOnly>
        <HiMenu className="text-xl" />
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          closeButton: "hidden",
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col items-center gap-1">
              Menu
            </ModalHeader>
            <ModalBody>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-x-3 dark:text-white"
                  >
                    <div className="flex items-center gap-x-3">
                      <div className="h-6 w-6">
                        <TfiHome className="h-full w-full" />
                      </div>
                      <span>Home</span>
                    </div>
                  </Link>
                </li>
                {dataMenuNavbar.map((data, i) => {
                  return <MenuNavMobile data={data} key={i} />;
                })}
              </ul>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileMenu;
