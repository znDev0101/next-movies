import DiscoverList from "@/components/layout/discover-list/DiscoverList";
import ListPagination from "@/components/ui/ListPagination";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: Promise<{ mediatype: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const mediatype = (await params).mediatype;

  return {
    title:
      mediatype === "tv"
        ? "Discover TV Shows - Movies App"
        : "Discover Movies - Movies App",
  };
}
export default async function DicoverPages({
  params,
}: {
  params: Promise<{ mediatype: string }>;
}) {
  const { mediatype } = await params;
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
      <Suspense fallback={null}>
        <DiscoverList />
        <ListPagination totalPage={300} />
      </Suspense>
    </main>
  );
}
