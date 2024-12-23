import CardSkeleton from "@/components/skeleton/CardSkeleton";
import Card from "@/components/ui/Card";
import ITrendingTvshow from "@/types/trendingTvshow";
import Link from "next/link";
import React, { Suspense } from "react";

const TrendingTv = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`,
  );

  const { results } = await response.json();

  return (
    <section className="my-10 w-full">
      <div className="flex items-center justify-between gap-x-5 lg:justify-start">
        <h1 className="text-xl font-bold lg:text-2xl">Trending Tv Shows</h1>
        <Link
          href={"/trending/tvshows"}
          className="rounded-md bg-gray-300 px-4 py-1 font-semibold dark:bg-[#3C3D37]"
        >
          Explore more
        </Link>
      </div>
      <div className="my-5 flex snap-x snap-mandatory space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide">
        <Suspense fallback={<CardSkeleton length={5} />}>
          {results.map((data: ITrendingTvshow, i: number) => {
            return <Card data={data} key={i} />;
          })}
        </Suspense>
      </div>
    </section>
  );
};

export default TrendingTv;
