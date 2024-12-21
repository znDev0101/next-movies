"use client";

import CardDetail from "@/components/ui/CardDetail";
import TabsDetails from "@/components/ui/TabsDetails";
import { IImagesPerson } from "@/types/imagesperson";
import { IKnownFor } from "@/types/knownfor";
import { Tab } from "@nextui-org/tabs";
import React from "react";

const TabsDetailPerson = ({
  knownForData,
  imagesPersonData,
}: {
  knownForData: IKnownFor[] | undefined;
  imagesPersonData: IImagesPerson[] | undefined;
}) => {
  return (
    <TabsDetails>
      <Tab key={"knownfor"} title={"Known For"}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {knownForData?.length !== 0 ? (
            <>
              {knownForData?.map((data, i) => {
                return <CardDetail data={data} key={i} />;
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
                  <CardDetail
                    data={data}
                    key={i}
                    typeCardDetail="imagesPerson"
                  />
                );
              })}
            </>
          ) : (
            <h1 className="my-5 text-center text-2xl font-semibold">No Cast</h1>
          )}
        </div>
      </Tab>
    </TabsDetails>
  );
};

export default TabsDetailPerson;
