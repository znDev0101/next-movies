import CardDetail from "@/components/ui/CardDetail";
import { ITabsDetailRecommendations } from "@/types/recommendations";
import React from "react";

const Recommendations = ({
  data,
}: {
  data: ITabsDetailRecommendations[] | undefined;
}) => {
  console.log(data);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data?.map((data, i) => {
          return <CardDetail data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Recommendations;
