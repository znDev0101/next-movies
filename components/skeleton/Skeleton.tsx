import React from "react";

const Skeleton = ({ length }: { length: number }) => {
  const skeletons = Array.from({ length: length }, (_, i) => i + 1);

  return (
    <>
      {skeletons.map((_, i) => {
        return (
          <div className="mt-5 grid w-full grid-cols-2 gap-x-3" key={i}>
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col gap-y-3">
                <div className="h-20 w-20 animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-2 w-20 animate-pulse rounded-md bg-gray-300"></div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="h-2 w-56 animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-2 w-56 animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-2 w-56 animate-pulse rounded-md bg-gray-300"></div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col gap-y-3">
                <div className="h-20 w-20 animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-2 w-20 animate-pulse rounded-md bg-gray-300"></div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="h-2 w-56 animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-2 w-56 animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-2 w-56 animate-pulse rounded-md bg-gray-300"></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skeleton;
