import { ITabsDetailCredits } from "@/types/credits";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface HeroSectionImage {
  cast?: ITabsDetailCredits[];
  backdrop_path: string;
}

interface IHeroSectionProps {
  data?: HeroSectionImage;
  id?: string;
}

const HeroSection = async ({ data, id }: IHeroSectionProps) => {
  const randomIndex = Math.floor(Math.random() * 20);
  const imageBackdropPerson = data?.cast?.[randomIndex]?.backdrop_path;

  if (id !== undefined) {
    return (
      <section className="mx-auto mt-10 hidden w-[96%] lg:block">
        <div className="relative mt-16 overflow-hidden rounded-xl lg:h-[90vh]">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data?.backdrop_path || imageBackdropPerson}`}
            alt="image backdrop"
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
      </section>
    );
  } else {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
    );

    const results = await response.json();
    const randomIndex = Math.floor(Math.random() * 20);
    const imageBackDrop = `https://image.tmdb.org/t/p/original${results.results[randomIndex]?.backdrop_path}`;

    return (
      <section className="relative z-40 mt-20 h-[75vh] overflow-hidden rounded-lg lg:mt-16 lg:h-[90vh]">
        <div className="relative h-full">
          <Image
            alt="image backdrop"
            src={imageBackDrop}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
        <div className="absolute bottom-7 left-1/2 z-40 flex w-full max-w-4xl -translate-x-1/2 transform flex-col gap-y-3 px-5 text-center lg:gap-y-5">
          <div className="mx-auto w-max rounded-full bg-gray-900 px-3 py-1 dark:bg-white">
            <span className="text-xs font-bold text-white dark:text-black lg:text-medium">
              Treding Now
            </span>
          </div>
          <h1 className="text-2xl font-bold lg:text-5xl">
            {results.results[randomIndex]?.title ||
              results.results[randomIndex]?.name}
          </h1>
          <p className="line-clamp-4 text-gray-700 dark:text-gray-300">
            {results.results[randomIndex]?.overview}
          </p>
          <Link
            href={`${results.results[randomIndex].media_type}/${results.results[randomIndex].id}`}
            className="mx-auto flex w-max items-center gap-x-3 rounded-lg bg-black px-7 py-2 font-semibold text-white dark:bg-white dark:text-black"
          >
            Details
            <FaArrowRightLong />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
      </section>
    );
  }
};

export default HeroSection;
