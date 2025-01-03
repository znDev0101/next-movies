import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Airing Today Tv Shows - Movie App",
  description: "Generated by create next app",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function AiringToday(props: {
  searchParams: SearchParams;
}) {
  const { page } = await props.searchParams;

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&page=${page === undefined ? 1 : page}`,
  );

  const { results } = await response.json();

  return (
    <main>
      <section className="mx-auto mt-24 w-[95%]">
        <div className="my-16 lg:w-[60%]">
          <h1 className="text-3xl font-semibold">Airing Today</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Don&apos;t miss out on the latest episodes of your favorite TV shows
            airing today. Stay up-to-date with the newest content from networks
            and streaming platforms.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype="tv" />;
          })}
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <ListPagination />
        </Suspense>
      </section>
    </main>
  );
}
