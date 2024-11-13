import { RiMovie2Line } from "react-icons/ri";
import { LuTv } from "react-icons/lu";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { IconType } from "react-icons";

type MenuItems = {
  menuName: string;
  iconMenu: IconType;
  buttonDropDown: IconType;
  dropDownMenu: any[];
};

export const menuItemsNav: MenuItems[] = [
  {
    menuName: "Movies",
    iconMenu: RiMovie2Line,
    buttonDropDown: FaAngleDown,
    dropDownMenu: [
      {
        menuNameDrowdown: "Now Playing",
        description:
          "Catch the latest movies now playing in theaters near you. Experience the magic of cinema with current hits.",
      },
      {
        menuNameDrowdown: "Top Rated",
        description:
          "Explore the pinnacle of cinematic excellence with our collection of top-rated movies. These films have been recognized for their outstanding storytelling, direction, and performances.",
      },
      {
        menuNameDrowdown: "Popular",
        description:
          "Dive into the world of popular movies that have captured the hearts of audiences worldwide. From blockbuster hits to critically acclaimed films, discover what's trending in the cinematic universe.",
      },
      {
        menuNameDrowdown: "Up Coming",
        description:
          "Be the first to watch the latest movies before they hit the big screen. Discover the upcoming movies that everyone is talking about.",
      },
    ],
  },
  {
    menuName: "Tv Shows",
    iconMenu: LuTv,
    buttonDropDown: FaAngleDown,
    dropDownMenu: [
      {
        menuNameDrowdown: "Airing Today",
        description:
          "Don't miss out on the latest episodes of your favorite TV shows airing today. Stay up-to-date with the newest content from networks and streaming platforms.",
      },
      {
        menuNameDrowdown: "Top Rated",
        description:
          "Explore the pinnacle of television excellence with our collection of top-rated TV shows. These series have been recognized for their outstanding storytelling, acting, and production values.",
      },
      {
        menuNameDrowdown: "Popular",
        description:
          "Dive into the world of popular TV shows that have captured the hearts of audiences worldwide. From binge-worthy series to critically acclaimed dramas, discover what's trending in the TV universe.",
      },
      {
        menuNameDrowdown: "On The Air",
        description:
          "Tune in to the latest buzz with shows currently on the air. From gripping dramas to laugh-out-loud comedies, watch what's captivating audiences right now.",
      },
    ],
  },
  {
    menuName: "Trending",
    iconMenu: HiOutlineTrendingUp,
    buttonDropDown: FaAngleDown,
    dropDownMenu: [
      {
        menuNameDrowdown: "Movies",
        description:
          "Stay on the pulse of what's hot in the movie scene. See what films are making waves and capturing audiences around the globe.",
      },
      {
        menuNameDrowdown: "Tv Shows",
        description:
          "Catch up with the world and see what TV shows are currently trending. From viral sensations to critically acclaimed series, find out what's capturing viewers' attention.",
      },
    ],
  },
];
