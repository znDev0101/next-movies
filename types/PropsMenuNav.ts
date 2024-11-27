import MenuNav from "@/components/MenuNav";
import { IconType } from "react-icons";

interface MenuDropDownItem {
  nameDropDown: string;
  description: string;
  Icon: IconType;
}

export interface PropsMenuNav {
  IconNav: IconType;
  nameNav: string;
  description: string;
  IconDown: IconType;
  menuDropDown: MenuDropDownItem[];
}
