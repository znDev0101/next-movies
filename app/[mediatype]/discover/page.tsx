import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import ReUseDrawer from "@/components/ui/ReUseDrawer";
import ReUseSelect from "@/components/ui/ReUseSelect";
import { dataSelectDiscover } from "@/data/dataSelectDiscover";
import { IAllMedia } from "@/types/allList";
import { fetchFromAPI } from "@/utils/fetchApi";
import { Metadata } from "next";
import { Suspense } from "react";

type Params = Promise<{ mediatype: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  // read route params
  const { mediatype } = await props.params;

  return {
    title:
      mediatype === "tv"
        ? "Discover TV Shows - Movies App"
        : "Discover Movies - Movies App",
  };
}
export default async function DicoverPages(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { mediatype } = await props.params;
  const searchParams = await props.searchParams;
  const withGenres = searchParams.with_genres;
  const sortBy = searchParams.sort_by;
  const page = searchParams.page;

  const data = await fetchFromAPI<IAllMedia>(
    `discover/${mediatype}?with_genres=${withGenres}&sort_by=${sortBy !== undefined ? `${sortBy}` : `popularity.desc`}&page=${page !== undefined ? page : `1`}&api_key=${process.env.API_KEY}`,
  );

  return (
    <main>
      <section className="ms-2 mt-20 max-w-7xl lg:ms-5">
        <h1 className="text-3xl font-semibold lg:text-4xl">
          Discover {mediatype === "tv" ? "TV Shows" : "Movies"}
        </h1>
        <p className="my-4 text-medium lg:text-xl">
          {mediatype === "tv"
            ? "Unearth new TV shows and hidden gems in the vast landscape of television. Whether you're into dramas, comedies, or thrillers, there's always something new to discover."
            : "Uncover hidden gems and new releases in the world of cinema. Dive into a sea of movies waiting to be discovered by you."}
        </p>
      </section>
      <section className="w-full px-2 lg:px-5">
        <div className="flex items-center justify-end gap-x-7">
          <ReUseDrawer />
          <ReUseSelect data={dataSelectDiscover} />
        </div>
      </section>
      <section className="w-full px-2 lg:px-5">
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
          {data?.results.map((data, i) => {
            return <Card data={data} key={i} mediatype={mediatype} />;
          })}
        </div>
      </section>
      <section className="w-full">
        <Suspense fallback={null}>
          <ListPagination totalPage={500} />
        </Suspense>
      </section>
    </main>
  );
}
