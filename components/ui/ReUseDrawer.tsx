import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface ReUseDrawerProps {
  titleButton: string;
  titleDrawer: string;
  descriptionTitleDrawer?: string;
}

const ReUseDrawer = ({
  titleButton,
  titleDrawer,
  descriptionTitleDrawer,
}: ReUseDrawerProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 428) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <>
      <Button onPress={onOpen}>{titleButton}</Button>
      <Drawer
        isOpen={isOpen}
        backdrop="blur"
        size={"xl"}
        placement={isMobile ? "bottom" : "right"}
        onOpenChange={onOpenChange}
        classNames={{
          base: "h-[50vh] lg:h-screen",
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <h1>{titleDrawer}</h1>
                <p className="font-normal">{descriptionTitleDrawer}</p>
              </DrawerHeader>
              <DrawerBody>
                <p>Fitur ini masih tahap pengembangan mohon bersabar</p>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ReUseDrawer;
