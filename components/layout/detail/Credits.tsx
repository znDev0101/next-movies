import CardCredits from "@/components/ui/CardCredits";
import { ICreditProps } from "@/types/credits";
import React from "react";

const Credits = ({ data }: { data: ICreditProps[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data?.length !== 0 ? (
        <>
          {data?.map((data, i) => {
            return <CardCredits data={data} key={i} />;
          })}
        </>
      ) : (
        <h1 className="my-5 text-center text-2xl font-semibold">No Cast</h1>
      )}
    </div>
  );
};

export default Credits;
