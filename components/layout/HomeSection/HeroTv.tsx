import ItemHero from "@/components/ui/ItemHero";
import { DataFromApi } from "@/types/DataFromApi";
import React from "react";

const HeroTv = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`,
  );
  const data = await response.json();
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {data.results.slice(0, 4).map((data: DataFromApi, i: number) => {
          return <ItemHero data={data} key={i} />;
        })}
      </div>
    </section>
  );
};

export default HeroTv;
