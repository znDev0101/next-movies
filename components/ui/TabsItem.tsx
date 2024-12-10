import { Tab } from "@nextui-org/tabs";
import React, { useEffect, useState } from "react";

interface ITabsDetail {
  id: string;
  label: string;
}

const TabsItem = ({ item, id }: { item: ITabsDetail; id: string }) => {
  const [data, setData] = useState([]);

  const tabsDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/${item.label === "Watch" ? `watch/providers` : item.id}?api_key=${process.env.API_KEY}`,
      );

      const results = await response.json();
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tabsDetail();
  }, []);

  return (
    <div className="">
      <p>test</p>
    </div>
  );
};

export default TabsItem;
