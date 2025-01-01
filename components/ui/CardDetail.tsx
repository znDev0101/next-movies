"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";

interface ICardDetailProps<T> {
  data: T;
  pagePerson?: boolean | undefined;
  renderContent: (data: T) => React.ReactNode;
}

const CardDetail = <
  T extends {
    id: number;
    cast_id?: number;
    credit_id?: number;
    media_type?: string;
    file_path?: string;
  },
>({
  data,
  pagePerson,
  renderContent,
}: ICardDetailProps<T>) => {
  const { mediatype } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShowPictureModal, setIsShowPictureModal] = useState<boolean>(false);

  const pathname = usePathname();

  return pagePerson !== undefined ? (
    <>
      <div
        className="relative w-full overflow-hidden rounded-lg border border-gray-300 hover:cursor-pointer"
        onMouseEnter={() => setIsShowPictureModal(!isShowPictureModal)}
        onMouseLeave={() => setIsShowPictureModal(!isShowPictureModal)}
        onClick={onOpen}
      >
        {renderContent(data)}
        {isShowPictureModal && (
          <>
            <MdOutlineZoomOutMap className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-5xl" />
            <div className="absolute bottom-0 left-0 right-0 top-0 opacity-85 hover:duration-200 hover:dark:bg-gray-800"></div>
          </>
        )}
      </div>
      <Modal
        size="3xl"
        placement="center"
        backdrop={"opaque"}
        classNames={{
          backdrop:
            "bg-gradient-to-b lg:bg-gradient-to-t dark:from-zinc-900 dark:to-zinc-900/10 dark:backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onClose={onClose}
        hideCloseButton
      >
        <ModalContent>
          <>
            <ModalBody className="p-0">
              <div className="relative h-[30rem] w-full lg:h-[90vh]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.file_path}`}
                  alt="img person"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  ) : (
    <Link
      href={`${data.credit_id !== undefined && !pathname.includes("/person/") ? `/person/${data.id}` : `${data.media_type !== undefined ? `/${data.media_type}/${data.id}` : `/${mediatype}/${data.id}`}`}`}
    >
      <div className="relative w-full overflow-hidden rounded-lg border border-gray-300 hover:cursor-pointer">
        {renderContent(data)}
      </div>
    </Link>
  );
};

export default CardDetail;
