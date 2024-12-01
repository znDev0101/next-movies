"use client";
import Card from "@/components/ui/Card";
import useFetch from "@/hooks/useFetch";
import { DataFromApi } from "@/types/DataFromApi";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CardSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const data = useFetch(
    "https://api.themoviedb.org/3/search/multi?query=",
    query,
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main>
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold text-white">
            Search results for
          </h1>
          <span className="text-xl">&quot;{query}&quot;</span>
        </div>
        <section className="m-5">
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
            {data?.map((data: DataFromApi, i: number) => {
              return <Card data={data} searchQuery={query} key={i} />;
            })}
          </div>
        </section>
      </main>
    </Suspense>
  );
}
