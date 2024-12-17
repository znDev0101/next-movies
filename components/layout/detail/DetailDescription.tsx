import ModalUI from "@/components/ui/Modal";
import { IMediaDetail } from "@/types/mediaDetail";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailDescription = ({ data }: { data: IMediaDetail }) => {
  return (
    <section className="mx-auto mt-20 w-[95%] lg:mt-20 lg:w-[85%]">
      <div className="flex w-full flex-col items-center gap-x-3 lg:grid lg:grid-cols-[max-content_1fr] lg:gap-x-20">
        <div className="relative mb-5 h-[70vh] w-full flex-shrink-0 overflow-hidden rounded-xl lg:h-[30rem] lg:w-80">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original/${data.poster_path}`}
            alt="poster image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="my-5 w-full">
          <div className="flex gap-x-4">
            <span className="rounded-full bg-black px-3 text-xs font-semibold text-white dark:bg-white dark:text-black lg:text-medium">
              {data.vote_average}
            </span>

            <div className="flex gap-x-2">
              {data.genres.map((data, i) => {
                return (
                  <Link
                    href={`${data.name}`}
                    key={i}
                    className="rounded-full bg-gray-200 px-2 text-xs font-semibold dark:bg-gray-800 dark:text-white lg:text-medium"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <h1 className="mt-5 text-4xl font-semibold">
            {data.title || data.name}
          </h1>
          {data.tagline.length !== 0 && (
            <div className="my-6">
              <q className="text-xl text-gray-600 dark:text-gray-400">
                {data.tagline}
              </q>
            </div>
          )}

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {data.overview}
          </p>
          <ModalUI />
        </div>
      </div>
    </section>
  );
};

export default DetailDescription;
