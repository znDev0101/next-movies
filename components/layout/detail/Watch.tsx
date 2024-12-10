import Image from "next/image";
import React, { useEffect, useState } from "react";

type Provider = {
  link: string;
  flatrate?: Array<{
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: number;
  }>;
  buy?: Array<{
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: number;
  }>;
  rent?: Array<{
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: number;
  }>;
};

type WatchProviders = {
  [countryCode: string]: Provider;
};

const Watch = ({ mediatype, id }: { mediatype: string; id: string }) => {
  const [data, setData] = useState<WatchProviders | null>(null);

  const getDataWatchProvider = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${mediatype}/${id}/watch/providers?api_key=${process.env.API_KEY}`,
      );
      const { results }: { results: WatchProviders } = await response.json();
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataWatchProvider();
  }, []);

  return (
    <div>
      <h1>Where to Watch</h1>
      <p>Stream, buy or rent this movie from the providers below.</p>
      <div className="my-6 flex flex-col gap-y-6 lg:flex-row lg:gap-x-80">
        <div className="flex-col">
          <h1 className="font-semibold">test</h1>
          <p>Not Available</p>
        </div>
        <div>
          <h1 className="font-semibold">Buy</h1>
          {data?.US.buy?.map((data, i) => {
            return (
              <div className="my-4 flex items-center gap-x-3" key={i}>
                <div className="relative h-10 w-10">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.logo_path}`}
                    alt="logo image"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h1>{data.provider_name}</h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold">Rent</h1>
          {data?.US.rent?.map((data, i) => {
            return (
              <div className="my-4 flex items-center gap-x-3" key={i}>
                <div className="relative h-10 w-10">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original${data.logo_path}`}
                    alt="logo image"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h1>{data.provider_name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Watch;
