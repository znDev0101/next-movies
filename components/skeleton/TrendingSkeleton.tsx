import React from "react";

const TrendingSkeleton = () => {
  const skeletons = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <>
      {skeletons.map((_, i) => {
        return (
          <div className='w-full grid grid-cols-2 gap-x-3 mt-5' key={i}>
            <div className='flex items-center gap-x-4'>
              <div className='flex flex-col gap-y-3'>
                <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='w-20 h-2 rounded-md bg-gray-300 animate-pulse'></div>
              </div>
              <div className='flex flex-col gap-y-3'>
                <div className='w-56 h-2 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='w-56 h-2 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='w-56 h-2 bg-gray-300 animate-pulse rounded-md'></div>
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='flex flex-col gap-y-3'>
                <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='w-20 h-2 rounded-md bg-gray-300 animate-pulse'></div>
              </div>
              <div className='flex flex-col gap-y-3'>
                <div className='w-56 h-2 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='w-56 h-2 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='w-56 h-2 bg-gray-300 animate-pulse rounded-md'></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TrendingSkeleton;
