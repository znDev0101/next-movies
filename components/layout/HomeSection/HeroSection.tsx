import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=220d62371abf4992685b9078d86d3b79"
  );

  const results = await response.json();
  const randomIndex = Math.floor(Math.random() * 20);
  const imageBackDrop = `https://image.tmdb.org/t/p/original${results.results[randomIndex]?.backdrop_path}`;

  return (
    <section className='relative h-[88dvh] mt-14 z-40'>
      <div className='relative h-full rounded-lg overflow-hidden '>
        <Image
          alt='Mountains'
          src={imageBackDrop}
          fill
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          priority
        />
      </div>
      <div className='absolute w-full px-5 bottom-7 left-1/2 transform -translate-x-1/2 max-w-4xl flex flex-col gap-y-3 lg:gap-y-5 text-center z-40 '>
        <div className='bg-gray-900 dark:bg-[#181C14] w-max mx-auto rounded-full px-3 py-1'>
          <span className='text-white font-bold'>Treding Now</span>
        </div>
        <h1 className='font-bold text-2xl lg:text-5xl'>
          {results.results[randomIndex]?.title ||
            results.results[randomIndex]?.name}
        </h1>
        <p className='line-clamp-4 text-gray-700 dark:text-gray-400'>
          {results.results[randomIndex]?.overview}
        </p>
        <Button className='w-max mx-auto' endContent={<FaArrowRightLong />}>
          Details
        </Button>
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:from-[#181C14] opacity-75'></div>
    </section>
  );
};

export default HeroSection;
