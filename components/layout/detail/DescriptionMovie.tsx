import { IDetailMovie } from "@/types/detailMovie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DescriptionMovie = ({ data }: { data: IDetailMovie }) => {
  return (
    <section className="mx-auto mt-20 w-[95%] lg:w-[98%]">
      <div className="flex w-full flex-col gap-x-3 lg:grid lg:grid-cols-[max-content_1rem]">
        <div className="relative h-[85vh] w-full flex-shrink-0 overflow-hidden rounded-xl lg:h-96 lg:w-80">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original/${data.poster_path}`}
            alt="poster image"
            fill
          />
        </div>
        <div className="mt-5">
          <div className="flex gap-x-4">
            <div>
              <span>{data.vote_average}</span>
            </div>
            <div className="flex gap-x-3">
              {data.genres.map((data, i) => {
                return (
                  <Link href={`${data.name}`} key={i}>
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <h1 className="mt-5 text-2xl font-semibold">{data.title}</h1>
          <q className="mt-5">{data.tagline}</q>
          <p>{data.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionMovie;
