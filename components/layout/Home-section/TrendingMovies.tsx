import CardSkeleton from "@/components/skeleton/CardSkeleton";
import Card from "@/components/ui/Card";
import { ITrendingMovie } from "@/types/trendingMovie";
import Link from "next/link";
import { Suspense } from "react";

export default async function TrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`,
  );

  const { results } = await response.json();

  return (
    <section className="my-10 w-full">
      <div className="flex items-center justify-between gap-x-5 lg:justify-start">
        <h1 className="text-xl font-bold lg:text-2xl">Trending Movies</h1>
        <Link
          href={"/trending/movies"}
          className="rounded-md bg-gray-300 px-4 py-1 font-semibold dark:bg-[#3C3D37]"
        >
          Explore more
        </Link>
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
