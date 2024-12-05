import Card from "@/components/ui/Card";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now Playing Movie - Movie App",
  description: "Generated by create next app",
};

export default async function NowPlaying() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`,
  );

  const { results } = await response.json();

  return (
    <main>
      <section className="mx-auto mt-16 w-[97%]">
        <div className="w-[60%]">
          <h1 className="text-3xl font-semibold">Now Playing Movies</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Catch the latest movies now playing in theaters near you. Experience
            the magic of cinema with current hits.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype={"movie"} />;
          })}
        </div>
      </section>
    </main>
  );
}
