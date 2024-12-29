"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

interface ReuseSelectProps {
  data: any;
  selectSortMedia: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ReUseSelect = ({
  data,
  selectSortMedia,
  handleChange,
}: ReuseSelectProps) => {
  return (
    <div className="flex w-44 flex-col gap-2">
      <Select
        className="w-44"
        label="Sort By"
        placeholder="Select an sort by"
        selectedKeys={[selectSortMedia]}
        onChange={handleChange}
      >
        {data.map((data: any) => (
          <SelectItem key={data.key}>{data.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ReUseSelect;
