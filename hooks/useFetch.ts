"use client";

import { useEffect, useState } from "react";

export default function useFetch(urlApi: string, querySearch?: string | null) {
  const [data, setData] = useState<any[]>();

  const getData = async () => {
    try {
      const response = await fetch(
        `${urlApi}${querySearch}&api_key=${process.env.API_KEY}`,
      );

      const data = await response.json();

      setData(data.results);
    } catch (error) {
      console.error("Error Message" + error);
    }
  };

  useEffect(() => {
    // getData from query search
    if (querySearch?.length !== 0) getData();
  }, [querySearch]);

  return data;
}
