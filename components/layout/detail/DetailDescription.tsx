import ModalUI from "@/components/ui/Modal";
import { IMediaDetail } from "@/types/mediaDetail";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailDescription = ({ data }: { data: IMediaDetail }) => {
  const mediatype = data?.release_date !== undefined;

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
          <div className="flex gap-x-2">
            <span className="self-start rounded-full bg-black px-2 text-xs font-semibold text-white dark:bg-white dark:text-black lg:text-medium">
              {data.vote_average}
            </span>

            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {data.genres.map((data, i) => {
                return (
                  <Link
                    href={
                      mediatype
                        ? `/movie/discover?with_genres=${data.id}`
                        : `/tv/discover?with_genres=${data.id}`
                    }
                    key={i}
                    className="rounded-full bg-gray-200 px-2 text-xs font-semibold dark:bg-gray-800 dark:text-white lg:text-medium"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <h1 className="text-4xl font-semibold">
                {data.title || data.name}
              </h1>
              <span className="self-end text-xl dark:text-gray-300">
                (
                {data.release_date?.substring(0, 4) ||
                  data.first_air_date?.substring(0, 4)}
                )
              </span>
            </div>
            {data.tagline.length !== 0 && (
              <q className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                {data.tagline}
              </q>
            )}

            <p className="text-medium text-gray-600 dark:text-gray-400">
              {data.overview}
            </p>
          </div>
          <ModalUI />
        </div>
      </div>
    </section>
  );
};

export default DetailDescription;
