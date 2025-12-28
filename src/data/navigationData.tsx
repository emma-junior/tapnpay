import home from "../assets/home.svg";
import homeActive from "../assets/home-active.svg";
import history from "../assets/history.svg";
import historyActive from "../assets/history-active.svg";
import cards from "../assets/cards.svg";
import cardsActive from "../assets/cards-active.svg";
import more from "../assets/more.svg";
import moreActive from "../assets/more-active.svg";

export interface navigationDataType {
  title: string;
  path: string;
  icon: any;
  iconActive: any;
}

export const NavigationData: navigationDataType[] = [
  {
    title: "Home",
    path: "/",
    icon: home,
    iconActive: homeActive,
  },
  {
    title: "History",
    path: "/history",
    icon: history,
    iconActive: historyActive,
  },
  {
    title: "Cards",
    path: "/cards",
    icon: cards,
    iconActive: cardsActive,
  },
  {
    title: "More",
    path: "/more",
    icon: more,
    iconActive: moreActive,
  },
];
