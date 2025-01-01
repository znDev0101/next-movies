"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IDataReUseSelect {
  key: string;
  label: string;
}

interface ReuseSelectProps {
  data: IDataReUseSelect[];
}

const ReUseSelect = ({ data }: ReuseSelectProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const idGenre = searchParams.get("with_genres");
  const sortBy = searchParams.get("sort_by");

  const [selectSortMedia, setSelectSortMedia] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectSortMedia(e.target.value);
    router.push(
      `${pathname}?with_genres=${idGenre?.replace(",", "%2C")}&sort_by=${e.target.value}`,
    );
  };

  useEffect(() => {
    if (sortBy === null) {
      setSelectSortMedia("popularity.desc");
    }
  }, [sortBy]);

  return (
    <div className="flex w-44 flex-col gap-2">
      <Select
        className="w-44"
        label="Sort By"
        placeholder="Select an sort by"
        selectedKeys={[selectSortMedia]}
        onChange={handleChange}
        size="sm"
      >
        {data.map((data: IDataReUseSelect) => (
          <SelectItem key={data.key}>{data.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ReUseSelect;
