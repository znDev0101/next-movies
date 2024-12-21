"use client";

import TabsDetails from "@/components/ui/TabsDetails";
import { ITabsDetailCredits } from "@/types/credits";
import { ITabsDetailRecommendations } from "@/types/recommendations";
import { ITabsDetailReviews } from "@/types/reviews";
import { ITabsDetailSimiliar } from "@/types/similiar";
import { ITabsDetailWatch } from "@/types/watch";
import { Tab } from "@nextui-org/tabs";
import React from "react";
import Credits from "./Credits";
import Watch from "./Watch";
import Reviews from "./Reviews";
import Recommendations from "./Recommendations";
import Similiar from "./Similiar";

const TabsDetailMedia = ({
  credits,
  watch,
  reviews,
  recommendations,
  similar,
}: {
  credits: ITabsDetailCredits[] | undefined;
  watch: ITabsDetailWatch;
  reviews: ITabsDetailReviews[] | undefined;
  recommendations: ITabsDetailRecommendations[] | undefined;
  similar: ITabsDetailSimiliar[] | undefined;
}) => {
  return (
    <TabsDetails>
      <Tab key={"credits"} title={"Credits"}>
        <Credits data={credits} />
      </Tab>
      <Tab key={"watch"} title={"Watch"}>
        <Watch data={watch} />
      </Tab>
      <Tab key={"reviews"} title={"Reviews"}>
        <Reviews data={reviews} />
      </Tab>
      <Tab key={"recommendations"} title={"Recommendations"}>
        <Recommendations data={recommendations} />
      </Tab>
      <Tab key={"similar"} title={"Similar"}>
        <Similiar data={similar} />
      </Tab>
    </TabsDetails>
  );
};

export default TabsDetailMedia;
