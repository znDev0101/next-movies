import { ITabsDetailReviews } from "@/types/reviews";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Reviews = ({ data }: { data: ITabsDetailReviews[] | undefined }) => {
  return (
    <div className="flex max-w-7xl flex-col gap-y-7">
      {data?.length !== 0 ? (
        data?.map((data: ITabsDetailReviews, i: number) => {
          const date: Date = new Date(data.created_at);

          const formattedDate: string = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(date);

          return (
            <div key={i}>
              <div className="mb-3 flex items-center justify-between lg:items-start">
                <div className="flex gap-x-4">
                  <div
                    className={`relative h-10 w-10 ${data.author_details.avatar_path !== null && `overflow-hidden rounded-full`}`}
                  >
                    {data.author_details.avatar_path !== null ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.author_details.avatar_path}`}
                        alt="avatar Image"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <CgProfile className="h-[2.85rem] w-[2.85rem]" />
                    )}
                  </div>
                  <div className="flex gap-x-3">
                    <h1>{data.author_details.name}</h1>
                    <span className="text-xs lg:text-medium">
                      @{data.author_details.username}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-x-2 gap-y-2 lg:flex-row">
                  <span className="text-xs lg:text-medium">
                    {formattedDate}
                  </span>
                  <span className="w-max rounded-xl bg-black px-2 font-semibold text-white dark:bg-white dark:text-black lg:px-3">
                    {data.author_details.rating}.0
                  </span>
                </div>
              </div>
              <p className="ms-14 rounded-lg border p-4 dark:border-gray-800">
                {data.content}
              </p>
            </div>
          );
        })
      ) : (
        <div className="flex h-52 max-w-7xl items-center justify-center rounded-lg border dark:border-gray-800">
          <p className="text-xl font-semibold dark:text-gray-400">No Reviews</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
