import { IconType } from "react-icons";

interface MenuDropDownItem {
  nameDropDown: string;
  description: string;
  Icon: IconType;
}

export interface menuNavDropDown {
  IconNav: IconType;
  nameNav: string;
  description: string;
  IconDown: IconType;
  menuDropDown: MenuDropDownItem[];
}
