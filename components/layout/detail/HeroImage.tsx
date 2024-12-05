import { IDetailMovie } from "@/types/detailMovie";
import { IDetailTvShow } from "@/types/detailTvShow";

import Image from "next/image";
import React from "react";

const HeroImage = ({ data }: { data: IDetailMovie | IDetailTvShow }) => {
  return (
    <section className="mx-auto mt-16 w-[95%] overflow-hidden rounded-xl">
      <div className="relative h-[85vh]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.backdrop_path}`}
          alt="hero image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default HeroImage;
