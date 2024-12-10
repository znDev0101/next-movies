import { IMediaDetail } from "@/types/mediaDetail";
import { Button } from "@nextui-org/button";
import { IoPlayOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailDescription = ({ data }: { data: IMediaDetail }) => {
  return (
    <section className="mx-auto my-14 w-[95%] lg:mt-20 lg:w-[85%]">
      <div className="flex w-full flex-col items-center gap-x-3 lg:grid lg:grid-cols-[max-content_1fr] lg:gap-x-20">
        <div className="relative h-[80vh] w-full flex-shrink-0 overflow-hidden rounded-xl lg:h-[30rem] lg:w-80">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original/${data.poster_path}`}
            alt="poster image"
            fill
          />
        </div>
        <div className="my-5 w-full">
          <div className="flex gap-x-4">
            <span className="rounded-full bg-black px-3 font-semibold text-white dark:bg-white dark:text-black">
              {data.vote_average}
            </span>

            <div className="flex gap-x-3">
              {data.genres.map((data, i) => {
                return (
                  <Link
                    href={`${data.name}`}
                    key={i}
                    className="rounded-full bg-gray-200 px-2 font-semibold"
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
              <q className="text-xl text-gray-600">{data.tagline}</q>
            </div>
          )}

          <p className="text-xl text-gray-600">{data.overview}</p>
          <Button className="mt-7 bg-black font-semibold text-white">
            <IoPlayOutline className="text-2xl" /> Watch Trailer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailDescription;
