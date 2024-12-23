import { IAllList } from "@/types/allList";
import Image from "next/image";
import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";

interface CardProps<T> {
  data: T;
  searchQuery?: string | null;
  mediatype?: string;
}

const Card = ({ data, searchQuery = null, mediatype }: CardProps<IAllList>) => {
  return (
    <Link
      href={`/${mediatype !== undefined ? `${mediatype}` : `${data.media_type}`}/${data.id}`}
      className={`${searchQuery !== null ? `w-full` : `min-w-[calc(50%-0.5rem)] flex-shrink-0 snap-start rounded-md sm:min-w-[calc(33.333%-0.7rem)] lg:min-w-[calc(20%-.8rem)]`} `}
    >
      <div className="relative h-72 w-full overflow-hidden rounded-md border border-gray-300 lg:h-96">
        {data.poster_path === undefined || data.poster_path === null ? (
          <BiCameraMovie />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/w500${data.poster_path}`}
            alt={`poster path`}
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        )}
        <div className="absolute bottom-3 z-40 flex flex-col px-2 font-semibold lg:bottom-5 lg:gap-y-1">
          <div className="flex gap-x-3">
            <span className="rounded-full bg-[#181C14] px-3 py-1 text-xs text-white dark:bg-white dark:text-black">
              {data.vote_average}
            </span>
            {data.media_type !== undefined && (
              <span className="rounded-full bg-[#181C14] px-2 py-1 text-xs text-white dark:border dark:border-white">
                {data.media_type}
              </span>
            )}
          </div>
          <h1 className="mt-3 line-clamp-1 text-medium lg:text-xl">
            {data.name || data.title}
          </h1>
          <span className="text-xs dark:text-gray-400 lg:text-medium">
            {data.release_date?.substring(0, 4) ||
              data.first_air_date?.substring(0, 4)}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white opacity-95 dark:from-[#181C14]"></div>
      </div>
    </Link>
  );
};

export default Card;
