import Image from "next/image";
import React from "react";

const HeroSection = async () => {
  const pathImg = "https://image.tmdb.org/t/p/original/";

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );

  const results = await response.json();
  const randomItem = results.results?.[Math.floor(Math.random() * 20)];

  return (
    <section className='max-w-[81rem] mx-auto h-screen relative mt-3 rounded-lg overflow-hidden'>
      <div className='h-full'>
        {results.results.map((data: any, i: number) => {
          return (
            <div key={i}>
              <h1>{data.title || data.name}</h1>
            </div>
          );
        })}
        {/* <div className='relative w-full h-full'>
          <Image
            src={`${pathImg}${randomItem.backdrop_path}`}
            alt='hero movie img'
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/4 text-center flex flex-col lg:gap-y-2 pt-20 z-30'>
          <div className='w-max text-center mx-auto px-2 py-1 text-white rounded-full   bg-black dark:bg-white'>
            <p className='text-white dark:text-black'>Trending Now</p>
          </div>
          <h1 className='text-6xl font-bold'>
            {randomItem.title || randomItem.name}
          </h1>
          <p className='font-semibold text-gray-600'>{randomItem?.overview}</p>
        </div>
        <div className='absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-white from-5% opacity-60 dark:from-black dark:from-20% dark:opacity-85 z-20'></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
