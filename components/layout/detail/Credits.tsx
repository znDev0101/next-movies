import CardDetail from "@/components/ui/CardDetail";
import { ITabsDetailCredits } from "@/types/credits";
import Image from "next/image";
import React from "react";

const Credits = ({ data }: { data: ITabsDetailCredits[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data?.length !== 0 ? (
        <>
          {data?.map((data, i) => {
            return (
              <CardDetail<ITabsDetailCredits>
                data={data}
                key={i}
                renderContent={(data) => (
                  <>
                    <div className="relative h-72 w-full overflow-hidden rounded-md border border-gray-300 lg:h-96">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.profile_path}`}
                        alt="people img"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="absolute bottom-3 z-40 flex flex-col px-3 font-semibold lg:bottom-5 lg:gap-y-1">
                      <h1 className="mt-3 line-clamp-1 text-medium lg:text-xl">
                        {data.original_name}
                      </h1>
                      <h5 className="dark:text-gray-400">{data.character}</h5>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
                  </>
                )}
              />
            );
          })}
        </>
      ) : (
        <h1 className="my-5 text-center text-2xl font-semibold">No Cast</h1>
      )}
    </div>
  );
};

export default Credits;
