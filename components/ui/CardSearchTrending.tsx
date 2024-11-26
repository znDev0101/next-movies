import Image from "next/image";

interface PropsCardSearchTrending {
  key?: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // Array of numbers
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string; // Date stored as a string
  first_air_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const CardSearchTrending = ({ data }: { data: PropsCardSearchTrending }) => {
  const imagesPath: string = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="mt-5 flex items-start gap-x-2">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src={`${imagesPath}${data.poster_path}`}
            alt="poster movie img"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <h5 className="line-clamp-1 font-semibold">
          {data.title || data.name}
        </h5>
      </div>
      <p className="line-clamp-5">{data.overview}</p>
    </div>
  );
};

export default CardSearchTrending;
