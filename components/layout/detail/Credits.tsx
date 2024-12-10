import CardCredits from "@/components/ui/CardCredits";
import React, { useEffect, useState } from "react";

const Credits = ({ mediatype, id }: { mediatype: string; id: string }) => {
  const [data, setData] = useState([]);

  const getDataCredits = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${mediatype}/${id}/credits?api_key=${process.env.API_KEY}`,
      );
      const { cast } = await response.json();
      setData(cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataCredits();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data.map((data, i) => {
        return <CardCredits data={data} key={i} />;
      })}
    </div>
  );
};

export default Credits;
