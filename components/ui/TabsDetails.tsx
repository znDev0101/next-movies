"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import Credits from "../layout/detail/Credits";
import Watch from "../layout/detail/Watch";

const TabsDetails = ({ id, mediatype }: { id: string; mediatype: string }) => {
  const tabs = [
    {
      id: "credits",
      label: "Credits",
    },
    {
      id: "watch",
      label: "Watch",
    },
    {
      id: "reviews",
      label: "Reviews",
    },
    {
      id: "images",
      label: "Images",
    },
    {
      id: "videos",
      label: "Videos",
    },
    {
      id: "recommendations",
      label: "Recommendations",
    },
    {
      id: "similiar",
      label: "Similiar",
    },
  ];

  return (
    <section className="mx-auto lg:w-[85%]">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="credits" title="Credits">
              <Credits id={id} mediatype={mediatype} />
            </Tab>
            <Tab key="watch" title="Watch">
              <Watch id={id} mediatype={mediatype} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsDetails;
