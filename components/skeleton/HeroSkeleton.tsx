import React from "react";

const HeroSkeleton = () => {
  return (
    <div className="relative z-40 mt-20 flex h-[75vh] animate-pulse items-center justify-center overflow-hidden rounded-lg dark:bg-gray-800 lg:mt-16 lg:h-[90vh]">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-7 h-32 w-32 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        <h1 className="text-2xl">Loading hero image...</h1>
      </div>
    </div>
  );
};

export default HeroSkeleton;
