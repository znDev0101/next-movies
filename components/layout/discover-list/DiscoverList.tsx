"use client";

import React, { useState } from "react";
import MediaFilter from "@/components/MediaFilter";
import useFetch from "@/hooks/useFetch";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import CardDetail from "@/components/ui/CardDetail";
import Image from "next/image";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import { IAllMedia } from "@/types/allList";

interface IDiscoverMedia {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const DiscoverList = () => {
  const [isSaveChanges, setIsSaveChanges] = useState<boolean>(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { mediatype } = useParams();
  const idGenre = searchParams.get("with_genres");
  const page = searchParams.get("page");

  const router = useRouter();

  const { data, isLoading } = useFetch<IAllMedia>(
    `https://api.themoviedb.org/3/discover/${mediatype}?api_key=${process.env.API_KEY}&with_genres=${idGenre}&sort_by=${selectSortMedia}&page=${page !== null ? `${page}` : "1"}`,
    undefined,
  );

  return (
    <section className="my-10 w-full px-5">
      <MediaFilter
        handleChange={handleChange}
        selectSortMedia={selectSortMedia}
        setIsSaveChanges={setIsSaveChanges}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {isLoading ? (
          <CardSkeleton length={20} searchQuery={"tmpData"} />
        ) : (
          data?.results.map((data: IDiscoverMedia, i: number) => {
            return (
              <CardDetail<IDiscoverMedia>
                data={data}
                key={i}
                renderContent={(data) => (
                  <>
                    <div className="relative h-72 w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-300 lg:h-96">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.poster_path}`}
                        alt={`poster img`}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="absolute bottom-3 z-40 flex flex-col px-3 font-semibold lg:bottom-5 lg:gap-y-1">
                      <div className="flex gap-x-3">
                        <span className="rounded-full bg-[#181C14] px-5 py-1 text-xs text-white dark:bg-white dark:text-black">
                          {data.vote_average}
                        </span>
                      </div>
                      <h1 className="mt-3 line-clamp-1 text-medium lg:text-xl">
                        {data.title || data.original_name}
                      </h1>
                      <span className="text-xs dark:text-gray-400 lg:text-medium">
                        {data.release_date?.substring(0, 4) ||
                          data.first_air_date?.substring(0, 4)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
                  </>
                )}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default DiscoverList;
