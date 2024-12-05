import { DataFromApi } from "@/types/dataFromApi";
import Image from "next/image";
import React from "react";

const HeroImage = ({ data }: { data: DataFromApi }) => {
  return (
    <section className="mx-auto mt-16 w-[95%] overflow-hidden rounded-xl">
      <div className="relative h-[85vh]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_PATH}/orignal${data.poster_path}`}
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
