import CardDetail from "@/components/ui/CardDetail";
import { ITabsDetailSimiliar } from "@/types/similiar";
import React from "react";

const Similiar = ({ data }: { data: ITabsDetailSimiliar[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data?.length !== 0 ? (
        <>
          {data?.map((data, i) => {
            return <CardDetail data={data} key={i} />;
          })}
        </>
      ) : (
        <h1 className="my-5 text-center text-2xl font-semibold">No Similar</h1>
      )}
    </div>
  );
};

export default Similiar;
