import CardDetail from "@/components/ui/CardDetail";
import { ITabsDetailSimilar } from "@/types/similar";
import Image from "next/image";
import React from "react";

const Similiar = ({ data }: { data: ITabsDetailSimilar[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data?.length !== 0 ? (
        <>
          {data?.map((data, i) => {
            return (
              <CardDetail
                data={data}
                key={i}
                renderContent={(data) => (
                  <>
                    <div className="relative h-72 w-full overflow-hidden rounded-md border border-gray-300 lg:h-96">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.poster_path}`}
                        alt="poster img"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="absolute bottom-3 z-40 flex flex-col px-3 font-semibold lg:bottom-5 lg:gap-y-1">
                      <span className="w-max rounded-full bg-[#181C14] px-5 py-1 text-xs text-white dark:bg-white dark:text-black">
                        {data.vote_average}
                      </span>
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
          })}
        </>
      ) : (
        <div className="flex h-52 max-w-7xl items-center justify-center rounded-lg border dark:border-gray-800">
          <p className="text-xl font-semibold dark:text-gray-400">No Similar</p>
        </div>
      )}
    </div>
  );
};

export default Similiar;
