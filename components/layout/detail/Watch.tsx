import React, { useEffect, useState } from "react";

const Watch = ({ mediatype, id }: { mediatype: string; id: string }) => {
  const [data, setData] = useState([]);

  const getDataWatchProvider = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${mediatype}/${id}/watch/providers?api_key=${process.env.API_KEY}`,
      );
      const results = await response.json();
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
      <h1>Watch</h1>
      <p>
        Hello Test Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Officiis sint neque quibusdam hic corporis ut nemo pariatur impedit
        eaque veniam. Nemo optio placeat sapiente sed dolore corrupti
        accusantium a quod assumenda. Incidunt cupiditate accusantium aliquam,
        accusamus, non maiores, deleniti delectus voluptate ratione
        exercitationem quos. Sequi ex earum explicabo similique eveniet?
      </p>
    </div>
  );
};

export default Watch;
