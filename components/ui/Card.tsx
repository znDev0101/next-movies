import { DataFromApi } from "@/types/DataFromApi";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  data,
  id = undefined,
  searchQuery = null,
}: {
  data: DataFromApi;
  id?: string | undefined;
  searchQuery?: string | null;
}) => {
  const imagePath: string = "https://image.tmdb.org/t/p/w500";

  return (
    <Link
      href={`${data.media_type}/${data.id}`}
      className={`${searchQuery !== null ? `w-full` : `min-w-[calc(50%-0.5rem)] flex-shrink-0 snap-start rounded-md sm:min-w-[calc(33.333%-0.7rem)] lg:min-w-[calc(20%-.8rem)]`} `}
    >
      <div className="relative h-72 w-full overflow-hidden rounded-md border border-gray-600 lg:h-96">
        <Image
          src={`${imagePath}${data?.poster_path}`}
          alt={`poster path`}
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
        <div className="absolute bottom-5 z-40 flex flex-col px-5 font-semibold lg:bottom-5 lg:gap-y-1">
          <div className="flex gap-x-3">
            <span className="rounded-full px-5 py-1 text-xs dark:bg-white dark:text-black">
              {data.vote_average}
            </span>
            <span className="rounded-full px-2 py-1 text-xs dark:border dark:border-white">
              {data.media_type}
            </span>
          </div>
          <h1 className="line-clamp-1 text-xl">{data.name || data.title}</h1>
          <span className="dark:text-gray-400">
            {data.release_date || data.first_air_date}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
      </div>
    </Link>
  );
};

export default Card;
