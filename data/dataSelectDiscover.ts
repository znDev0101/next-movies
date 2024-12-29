import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { TbCalendarDown, TbCalendarUp } from "react-icons/tb";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { IoPersonAddOutline, IoPersonRemoveOutline } from "react-icons/io5";

export const dataSelectDiscover = [
  {
    icon: FaArrowTrendUp,
    key: "popularity.desc",
    label: "Highest Popularity",
  },
  {
    icon: FaArrowTrendDown,
    key: "popularity.asc",
    label: "Lowest Popularity",
  },
  {
    icon: TbCalendarUp,
    key: "primary_release_date.desc",
    label: "Most Recent",
  },
  {
    icon: TbCalendarDown,
    key: "primary_release_date.asc",
    label: "Least Recent",
  },
  {
    icon: AiTwotoneLike,
    key: "vote_average.desc",
    label: "Highest Rating",
  },
  {
    icon: AiTwotoneDislike,
    key: "vote_average.asc",
    label: "Lowest Rating",
  },
  {
    icon: IoPersonAddOutline,
    key: "vote_count.desc",
    label: "Most Voted",
  },
  {
    icon: IoPersonRemoveOutline,
    key: "vote_count.asc",
    label: "Least Voted",
  },
];
