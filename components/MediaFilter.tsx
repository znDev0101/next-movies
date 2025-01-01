import React from "react";
import { dataSelectDiscover } from "@/data/dataSelectDiscover";
import ReuseSelect from "./ui/ReUseSelect";
import ReUseDrawer from "./ui/ReUseDrawer";

interface IMediaFilterProps {
  selectSortMedia: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setIsSaveChanges: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const MediaFilter = ({
  selectSortMedia,
  handleChange,
  setIsSaveChanges,
  selected,
  setSelected,
}: IMediaFilterProps) => {
  return (
    <div className="flex items-center justify-end gap-x-5">
      <ReUseDrawer
        titleButton={"Filters"}
        titleDrawer={"Filters"}
        descriptionTitleDrawer={
          "Narrow down your search results with the following filters."
        }
        setIsSaveChanges={setIsSaveChanges}
        selected={selected}
        setSelected={setSelected}
      />
      <ReuseSelect
        data={dataSelectDiscover}
        handleChange={handleChange}
        selectSortMedia={selectSortMedia}
      />
    </div>
  );
};

export default MediaFilter;
