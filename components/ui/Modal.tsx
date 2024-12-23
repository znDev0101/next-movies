"use client";

import useFetch from "@/hooks/useFetch";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { useParams } from "next/navigation";
import React from "react";
import { IoPlayOutline } from "react-icons/io5";

const ModalUI = () => {
  const { mediatype, id } = useParams<{ mediatype: string; id: string }>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data } = useFetch(
    `https://api.themoviedb.org/3/${mediatype}/${id}/videos?api_key=${process.env.API_KEY}`,
  );

  console.log(data);

  const officialTrailer = data?.find(
    (video) =>
      video.type === "Trailer" &&
      video.official === true &&
      video.site === "YouTube",
  );

  return (
    <>
      <Button
        onPress={onOpen}
        className="mt-7 bg-black font-bold text-white dark:bg-white dark:text-black"
      >
        Watch Trailer
        <IoPlayOutline className="text-2xl" />
      </Button>
      <Modal
        backdrop="blur"
        size="5xl"
        classNames={{
          base: "h-80 lg:h-[500px]",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          <>
            <ModalBody className="relative">
              <iframe
                src={`https://www.youtube.com/embed/${officialTrailer?.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUI;
