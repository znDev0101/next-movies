"use client";

import { searchMovies } from "@/lib/actions";
import React, { useEffect, useState } from "react";

const SearchHeroMovie = () => {
  const [placeholder, setPlaceholder] = useState<string>("");

  const updatePlaceholder = () => {
    if (window.innerWidth < 768) {
      setPlaceholder("Search...");
    } else {
      setPlaceholder("Search for a movie, tv show, person...");
    }
  };

  useEffect(() => {
    updatePlaceholder();

    window.addEventListener("resize", updatePlaceholder);

    return () => {
      window.removeEventListener("resize", updatePlaceholder);
    };
  }, []);

  return (
    <div className='relative  bg-white w-[90%] rounded-full py-3 ps-5'>
      <form action={searchMovies}>
        <input
          type='text'
          name='searchMovie'
          placeholder={placeholder}
          className='bg-transparent focus:outline-none w-full placeholder:font-semibold'
        />
        <button
          type='submit'
          className='absolute right-0 top-0 bottom-0 bg-gradient-to-l from-indigo-500  to-emerald-500 to-90% text-white font-bold rounded-full px-5'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchHeroMovie;
