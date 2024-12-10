import Image from "next/image";
import React from "react";

const CardCredits = ({ data }: { data: any }) => {
  return (
    data.profile_path !== null && (
      <div className="relative w-full overflow-hidden rounded-lg border border-gray-300">
        <div className="relative h-96">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.profile_path}`}
            alt="profile image"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
        <div className="absolute bottom-6 left-5 z-40">
          <h1 className="text-xl font-semibold">{data.name}</h1>
          <p className="text-lg text-gray-600">{data.character}</p>
        </div>
      </div>
    )
  );
};

export default CardCredits;
