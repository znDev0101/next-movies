import CardSkeleton from "@/components/skeleton/CardSkeleton";
import Card from "@/components/ui/Card";
import { IAllList } from "@/types/allList";
import { Button } from "@nextui-org/button";
import React, { Suspense } from "react";

const AllTrending = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
  );
  const { results } = await response.json();

  return (
    <section className="my-10">
      <div className="flex gap-x-3">
        <h1 className="text-2xl font-bold">Trending Today</h1>
        <Button className="font-semibold dark:bg-[#3C3D37]">
          Explore more
        </Button>
      </div>
      <div className="my-5 flex snap-x snap-mandatory space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide">
        <Suspense fallback={<CardSkeleton length={5} />}>
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} />;
          })}
        </Suspense>
      </div>
    </section>
  );
};

export default AllTrending;
