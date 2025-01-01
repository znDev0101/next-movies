import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface IFetchApi<T> {
  data: T | undefined;
  isLoading: boolean;
}

export default function useFetch<T>(
  urlApi: string,
  querySearch?: string | null,
): IFetchApi<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();
  const patname = usePathname();
  const { mediatype } = useParams();

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${urlApi}`);

      if (response.ok) {
        console.log("Promise resolved and HTTP status is successful");
        const data = await response.json();
        setIsLoading(false);
        setData(data);
      } else {
        if (response.status === 404) throw new Error("404, Not found");
        if (response.status === 500)
          throw new Error("500, internal server error");
      }
    } catch (error) {
      console.error("Error Message" + error);
    }
  };

  // fetch for discover
  useEffect(() => {
    if (patname !== "/search" && patname === `/${mediatype}/discover`) {
      getData();
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
}
