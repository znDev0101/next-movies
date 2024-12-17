import CardSkeleton from "@/components/skeleton/CardSkeleton";
import Card from "@/components/ui/Card";
import { IAllList } from "@/types/allList";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { Suspense } from "react";

const AllTrending = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
  );
  const { results } = await response.json();

  return (
    <section className="my-10">
      <div className="flex justify-between gap-x-3 lg:justify-start">
        <h1 className="text-xl font-bold lg:text-2xl">Trending Today</h1>
        <Link
          href={"/alltrending"}
          className="rounded-md px-4 py-1 font-semibold dark:bg-[#3C3D37]"
        >
          Explore more
        </Link>
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
