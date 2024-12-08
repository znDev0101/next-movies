import { IAllList } from "@/types/allList";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ItemHero = ({ data }: { data: IAllList }) => {
  return (
    <div className="relative h-[30rem] w-full overflow-hidden rounded-lg border border-gray-300 lg:h-[40rem]">
      <div className="relative h-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.poster_path}`}
          alt="poster image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute bottom-7 left-1/2 z-40 flex w-full max-w-4xl -translate-x-1/2 transform flex-col gap-y-3 px-5 text-center lg:gap-y-5">
        <div className="mx-auto w-max rounded-full bg-gray-900 px-3 py-1 dark:bg-white">
          <span className="font-bold text-white dark:text-black">
            Treding Now
          </span>
        </div>
        <h1 className="text-2xl font-bold lg:text-5xl">
          {data.title || data.name}
        </h1>
        <p className="line-clamp-4 text-gray-700 dark:text-gray-300">
          {data.overview}
        </p>

        <Link
          href={`${data.media_type}/${data.id}`}
          className="mx-auto flex w-max items-center gap-x-3 rounded-lg p-2 font-semibold dark:bg-white dark:text-black"
        >
          Details
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
    </div>
  );
};

export default ItemHero;
