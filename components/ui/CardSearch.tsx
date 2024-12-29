"use client";

import useFetch from "@/hooks/useFetch";
import { useSearchParams } from "next/navigation";
import React from "react";
import Card from "./Card";
import { IAllList } from "@/types/allList";
import CardSkeleton from "../skeleton/CardSkeleton";

const CardSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  const { data, isLoading } = useFetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.API_KEY}&page=${page !== null ? page : `1`}`,
    query,
    page,
  );

  return (
    <>
      <section>
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold text-black dark:text-white">
            Search results for
          </h1>
          <span className="text-xl">&quot;{query}&quot;</span>
        </div>
      </section>
      <section>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
          {isLoading ? (
            <CardSkeleton length={20} searchQuery={query} />
          ) : (
            data?.map((data: IAllList, i: number) => {
              return <Card data={data} searchQuery={query} key={i} />;
            })
          )}
        </div>
      </section>
    </>
  );
};

export default CardSearch;
