import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
  );

  const results = await response.json();
  const randomIndex = Math.floor(Math.random() * 20);
  const imageBackDrop = `https://image.tmdb.org/t/p/original${results.results[randomIndex]?.backdrop_path}`;

  return (
    <section className="relative z-40 mt-10 h-[90vh] overflow-hidden rounded-lg lg:mt-14">
      <div className="relative h-full">
        <Image
          alt="Mountains"
          src={imageBackDrop}
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </div>
      <div className="absolute bottom-7 left-1/2 z-40 flex w-full max-w-4xl -translate-x-1/2 transform flex-col gap-y-3 px-5 text-center lg:gap-y-5">
        <div className="mx-auto w-max rounded-full bg-gray-900 px-3 py-1 dark:bg-white">
          <span className="font-bold text-white dark:text-black">
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
          className="mx-auto flex w-max items-center gap-x-3 rounded-lg p-2 font-semibold dark:bg-white dark:text-black"
        >
          Details
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
    </section>
  );
};

export default HeroSection;
