import React from "react";

const CardSkeleton = ({
  length,
  searchQuery,
}: {
  length: number;
  searchQuery?: string | null;
}) => {
  const skeletons = Array.from({ length: length }, (_, i) => i + 1);

  return skeletons.map((_, i) => {
    return (
      <div
        key={i}
        className={`${searchQuery !== null ? `h-72 w-full animate-pulse rounded-md bg-gray-300 dark:bg-gray-800 lg:h-96` : `h-72 min-w-[calc(50%-0.5rem)] flex-shrink-0 animate-pulse snap-start rounded-md bg-gray-300 dark:bg-gray-800 sm:min-w-[calc(33.333%-0.7rem)] lg:h-96 lg:min-w-[calc(20%-.8rem)]`} `}
      ></div>
    );
  });
};

export default CardSkeleton;
