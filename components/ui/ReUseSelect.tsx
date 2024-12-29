"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { IconType } from "react-icons";

interface IDataReUseSelect {
  icon: IconType;
  key: string;
  label: string;
}

interface ReuseSelectProps {
  data: IDataReUseSelect[];
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
        {data.map((data: IDataReUseSelect) => (
          <SelectItem key={data.key}>{data.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ReUseSelect;
