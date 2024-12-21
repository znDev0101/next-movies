import { ITabsDetailWatch } from "@/types/watch";
import Image from "next/image";
import React from "react";

const Watch = ({ data }: { data: ITabsDetailWatch }) => {
  return data !== undefined ? (
    <div>
      <h1 className="text-2xl font-semibold">Where to Watch</h1>
      <p className="text-gray-500">
        Stream, buy or rent this movie from the providers below.
      </p>
      <div className="my-10 flex flex-col gap-x-72 gap-y-8 lg:flex-row">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Stream</h1>
          {data.flatrate !== undefined ? (
            data.flatrate.map((data, i) => {
              return (
                <div className="my-5 flex items-center gap-x-3" key={i}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.logo_path}`}
                    alt={`logo path`}
                    width={50}
                    height={50}
                  />
                  <span>{data.provider_name}</span>
                </div>
              );
            })
          ) : (
            <p className="mt-4">Not available</p>
          )}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Buy</h1>
          {data.buy !== undefined ? (
            data.buy.map((data, i) => {
              return (
                <div className="my-5 flex items-center gap-x-3" key={i}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.logo_path}`}
                    alt={`logo path`}
                    width={50}
                    height={50}
                  />
                  <span>{data.provider_name}</span>
                </div>
              );
            })
          ) : (
            <p className="mt-4">Not available</p>
          )}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Rent</h1>
          {data.rent !== undefined ? (
            data.rent.map((data, i) => {
              return (
                <div className="my-5 flex items-center gap-x-3" key={i}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.logo_path}`}
                    alt={`logo path`}
                    width={50}
                    height={50}
                  />
                  <span>{data.provider_name}</span>
                </div>
              );
            })
          ) : (
            <p className="mt-4">Not available</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-5">
      <h1 className="text-xl font-semibold">Where to Watch</h1>
      <p className="text-gray-500">
        Stream, buy or rent this movie from the providers below.
      </p>
      <div className="my-16 flex flex-col gap-x-96 gap-y-7 lg:flex-row">
        <div className="flex w-full flex-col">
          <h1 className="font-semibold">Stream</h1>
          <p className="mt-2">Not available</p>
        </div>
        <div className="flex w-full flex-col">
          <h1 className="font-semibold">Buy</h1>
          <p className="mt-2">Not available</p>
        </div>
        <div className="flex w-full flex-col">
          <h1 className="font-semibold">Rent</h1>
          <p className="mt-2">Not available</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
