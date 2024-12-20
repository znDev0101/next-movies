import CardDetail from "@/components/ui/CardDetail";
import { ICardDetailProps } from "@/types/carddetail";
import React from "react";

const Credits = ({ data }: { data: ICardDetailProps[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data?.length !== 0 ? (
        <>
          {data?.map((data, i) => {
            return <CardDetail data={data} key={i} />;
          })}
        </>
      ) : (
        <h1 className="my-5 text-center text-2xl font-semibold">No Cast</h1>
      )}
    </div>
  );
};

export default Credits;
