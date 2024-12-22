"use client";

import CardDetail from "@/components/ui/CardDetail";
import TabsDetails from "@/components/ui/TabsDetails";
import { IImagesPersonData } from "@/types/imagesperson";
import { IKnownFor } from "@/types/knownfor";
import { Tab } from "@nextui-org/tabs";
import Image from "next/image";
import React, { useState } from "react";

const TabsDetailPerson = ({
  knownForData,
  imagesPersonData,
}: {
  knownForData: IKnownFor[] | undefined;
  imagesPersonData: IImagesPersonData[] | undefined;
}) => {
  return (
    <TabsDetails>
      <Tab key={"knownfor"} title={"Known For"}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {knownForData?.length !== 0 ? (
            <>
              {knownForData

                ?.sort((a, b) => {
                  const dateA = new Date(a.release_date).getTime();
                  const dateB = new Date(b.release_date).getTime();
                  return (dateB || 0) - (dateA || 0);
                })
                ?.slice(0, 20)
                ?.map((data, i) => {
                  return (
                    <CardDetail<IKnownFor>
                      data={data}
                      key={i}
                      renderContent={(data) => (
                        <>
                          <div className="relative h-72 w-full overflow-hidden rounded-md border border-gray-300 lg:h-96">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.poster_path}`}
                              alt="people img"
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
                              {data.original_title}
                            </h1>
                            <h5>{data.release_date}</h5>
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
      </Tab>
      <Tab key={"images"} title={"Images"}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {imagesPersonData?.length !== 0 ? (
            <>
              {imagesPersonData?.map((data, i) => {
                return (
                  <CardDetail<IImagesPersonData>
                    data={data}
                    key={i}
                    pagePerson={true}
                    renderContent={(data) => (
                      <>
                        <div className="relative h-72 w-full overflow-hidden rounded-md border border-gray-300 lg:h-96">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.file_path}`}
                            alt={`poster img`}
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
                        </div>
                      </>
                    )}
                  />
                );
              })}
            </>
          ) : (
            <h1 className="my-5 text-center text-2xl font-semibold">
              No Images
            </h1>
          )}
        </div>
      </Tab>
    </TabsDetails>
  );
};

export default TabsDetailPerson;
