import CardSkeleton from "@/components/skeleton/CardSkeleton";
import Card from "@/components/ui/Card";
import { ITrendingMovie } from "@/types/trendingMovie";
import { Button } from "@nextui-org/button";
import { Suspense } from "react";

export default async function TrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`,
  );

  const { results } = await response.json();

  return (
    <section className="my-10 w-full">
      <div className="flex items-center gap-x-5">
        <h1 className="text-2xl font-bold">Trending Movies</h1>
        <Button className="font-semibold dark:bg-[#3C3D37]">
          Explore more
        </Button>
      </div>
      <div className="my-5 flex snap-x snap-mandatory space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide">
        <Suspense fallback={<CardSkeleton length={5} />}>
          {results.map((data: ITrendingMovie, i: number) => {
            return <Card data={data} key={i} />;
          })}
        </Suspense>
      </div>
    </section>
  );
}
