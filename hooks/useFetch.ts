import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFetch(
  urlApi: string,
  querySearch?: string | null,
  page?: string | null,
  selectSortMedia?: string | null,
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>();
  const patname = usePathname();
  const { mediatype, id } = useParams();

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${urlApi}`);

      if (response.ok) {
        console.log("Promise resolved and HTTP status is successful");
        const data = await response.json();
        setIsLoading(false);
        setData(data.results);
      } else {
        if (response.status === 404) throw new Error("404, Not found");
        if (response.status === 500)
          throw new Error("500, internal server error");
      }
    } catch (error) {
      console.error("Error Message" + error);
    }
  };

  useEffect(() => {
    if (patname !== "/search" && patname === `/${mediatype}/discover`) {
      getData();
    }
  }, [selectSortMedia, page]);

  useEffect(() => {
    if (querySearch?.length !== 0) getData();
  }, [querySearch, page]);

  return { data, isLoading };
}
