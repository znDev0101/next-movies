"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import Credits from "../layout/detail/Credits";
import Watch from "../layout/detail/Watch";
import { ICreditsProps } from "@/types/credits";
import { IWatchProps } from "@/types/watch";

const TabsDetails = ({
  credits,
  watch,
}: {
  credits: ICreditsProps[];
  watch: IWatchProps;
}) => {
  return (
    <section className="mx-auto mt-10 w-[95%] lg:w-[85%]">
      <div className="flex w-full flex-col gap-y-5">
        <Tabs aria-label="Options">
          <Tab key="credits" title="Credits">
            <Credits data={credits} />
          </Tab>
          <Tab key="watch" title="Watch">
            <Watch data={watch} />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsDetails;
