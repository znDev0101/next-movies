"use client";

import useFetch from "@/hooks/useFetch";
import { IGenres } from "@/types/genres";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import {
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@nextui-org/react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";

const ReUseDrawer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const genreId = searchParams.get("with_genres");

  const [selected, setSelected] = React.useState<string[]>([genreId as string]);

  const { mediatype } = useParams();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 428) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const genres = selected.slice(1, selected.length).join("%2C");

  const { data } = useFetch<IGenres>(
    `https://api.themoviedb.org/3/genre/${mediatype}/list?api_key=${process.env.API_KEY}`,
  );

  const handleSave = (): void => {
    router.push(
      `${pathname}?with_genres=${selected.length !== 1 ? `${selected[0]}%2C${genres}` : `${selected[0]}`}`,
    );
  };

  return (
    <>
      <Button
        onPress={onOpen}
        endContent={<AiOutlineSetting />}
        className="py-7 text-medium font-semibold lg:text-xl"
      >
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        backdrop="blur"
        size={"xl"}
        placement={isMobile ? "bottom" : "right"}
        onOpenChange={onOpenChange}
        classNames={{
          base: "h-[55vh] lg:h-[70vh] lg:w-[25vw] lg:top-1/2 lg:-translate-y-1/2",
        }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <h1>Filters</h1>
                <p className="font-normal">
                  Narrow down your search results with the following filters.
                </p>
              </DrawerHeader>
              <DrawerBody>
                <CheckboxGroup
                  label="Genres"
                  value={selected}
                  onValueChange={setSelected}
                  orientation="horizontal"
                >
                  {data?.genres.map((data, i) => (
                    <Checkbox value={`${data.id}`} key={i}>
                      {data.name}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
                <Button onClick={handleSave} onPress={onClose} className="my-5">
                  Save Changes
                </Button>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ReUseDrawer;
