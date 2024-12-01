import Card from "@/components/ui/Card";
import { DataFromApi } from "@/types/DataFromApi";
import { Button } from "@nextui-org/button";
import React from "react";

const TrendingTv = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`,
  );

  const { results } = await response.json();

  return (
    <section className="my-10 w-full">
      <div className="flex items-center gap-x-5">
        <h1 className="text-2xl font-bold">Trending Tv Shows</h1>
        <Button className="font-semibold dark:bg-[#3C3D37]">
          Explore more
        </Button>
      </div>
      <div className="my-5 flex snap-x snap-mandatory space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide">
        {results.map((data: DataFromApi, i: number) => {
          return <Card data={data} key={i} />;
        })}
      </div>
    </section>
  );
};

export default TrendingTv;
