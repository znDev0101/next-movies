import React from "react";

const CardSkeleton = ({ length }: { length: number }) => {
  const skeletons = Array.from({ length: length }, (_, i) => i + 1);

  return skeletons.map((data, i) => {
    return (
      <div
        key={i}
        className="h-72 min-w-[calc(50%-0.5rem)] flex-shrink-0 animate-pulse snap-start rounded-md dark:bg-gray-800 sm:min-w-[calc(33.333%-0.7rem)] lg:h-96 lg:min-w-[calc(20%-.8rem)]"
      ></div>
    );
  });
};

export default CardSkeleton;
