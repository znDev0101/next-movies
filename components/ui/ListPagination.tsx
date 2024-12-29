"use client";

import { Pagination } from "@nextui-org/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

const ListPagination = ({ totalPage }: { totalPage: number | undefined }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const query = searchParams.get("query");
  const sortBy = searchParams.get("sort_by");
  const genreId = searchParams.get("with_genres");
  const pathname = usePathname();

  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (query !== null) {
      router.push(`${pathname}?query=${query}&page=${page}`);
    } else {
      router.push(`${pathname}?page=${page}`);
    }

    if (sortBy !== null && pathname !== "/search") {
      router.push(
        `${pathname}?with_genres=${genreId}&sort_by=${sortBy}&page=${page}`,
      );
    }

    if (genreId !== null && pathname !== "/search" && sortBy === null) {
      router.push(`${pathname}?with_genres=${genreId}&page=${page}`);
    }
  };

  return (
    <div>
      <Pagination
        classNames={{
          base: "mx-auto flex justify-center my-7",
          item: "bg-gray-200 text-black dark:bg-gray-900 dark:text-white ",
          cursor: "bg-gray-800 text-white dark:bg-white dark:text-black",
          next: "bg-gray-200 dark:bg-gray-700",
          prev: "bg-gray-200 dark:bg-gray-700",
        }}
        showControls
        onChange={handlePageChange}
        total={totalPage as number}
        page={page === null ? 1 : parseInt(page)}
        initialPage={page === null ? 1 : parseInt(page)}
      />
    </div>
  );
};

export default ListPagination;
