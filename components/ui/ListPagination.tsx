"use client";

import { Pagination } from "@nextui-org/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

const ListPagination = () => {
  const searchParams = useSearchParams();
  const getPage = searchParams.get("page");
  const query = searchParams.get("query");

  const pathname = usePathname();

  const totalPages = 100;
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (query !== null) {
      router.push(`${pathname}?query=${query}&page=${page}`);
    } else {
      router.push(`${pathname}?page=${page}`);
    }
  };

  return (
    <div>
      <Pagination
        classNames={{
          base: "mx-auto flex justify-center my-7",
        }}
        showControls
        onChange={handlePageChange}
        total={totalPages}
        initialPage={getPage === null ? 1 : parseInt(getPage)}
      />
    </div>
  );
};

export default ListPagination;
