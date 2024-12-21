"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";

const CardDetail = ({
  data,
  typeCardDetail,
}: {
  data: Record<string, any>;
  typeCardDetail?: string;
}) => {
  const releaseDate: string = data.release_date || data.first_air_date;
  const { mediatype } = useParams();
  const [isShowPicture, setIsShowPicture] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    data.profile_path !== null &&
    (typeCardDetail !== undefined ? (
      <>
        <div
          className="relative w-full overflow-hidden rounded-lg border border-gray-300 hover:cursor-pointer"
          onMouseEnter={() => setIsShowPicture(!isShowPicture)}
          onMouseLeave={() => setIsShowPicture(!isShowPicture)}
          onClick={onOpen}
        >
          <div className="relative h-72 lg:h-96">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.profile_path || data.poster_path || data.file_path}`}
              alt="profile image"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          {isShowPicture && (
            <MdOutlineZoomOutMap className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-4xl dark:text-white" />
          )}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 duration-200 hover:opacity-85 dark:from-[#181C14] hover:dark:bg-gray-800"></div>
        </div>
        <Modal
          classNames={{
            closeButton: "hidden",
          }}
          backdrop={"blur"}
          size="2xl"
          isOpen={isOpen}
          onClose={onClose}
          placement="center"
        >
          <ModalContent>
            <ModalBody className="p-0">
              <div className="relative h-[70vh] w-full overflow-hidden rounded-lg lg:h-[90vh]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.file_path}`}
                  alt="image person"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    ) : (
      <Link
        href={`${data.character !== undefined ? `/person/${data.id}` : `/${mediatype}/${data.id}`}`}
      >
        <div className="relative w-full overflow-hidden rounded-lg border border-gray-300">
          <div className="relative h-72 lg:h-96">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.profile_path || data.poster_path || data.file_path}`}
              alt="profile image"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
          <div className="absolute bottom-3 left-5 z-40">
            {data.vote_average !== undefined && (
              <span className="mb-2 rounded-xl px-3 font-semibold dark:bg-white dark:text-black">
                {data.vote_average}
              </span>
            )}
            <h1 className="line-clamp-1 text-medium font-semibold lg:text-xl">
              {data.name || data.title}
            </h1>
            <p className="text-lg text-gray-600">
              {data.character || releaseDate?.substring(0, 4)}
            </p>
          </div>
        </div>
      </Link>
    ))
  );
};

export default CardDetail;
