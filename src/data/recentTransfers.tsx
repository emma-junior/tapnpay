import ali from "../assets/avatars/avatar-one.png";
import steve from "../assets/avatars/avatar-two.png";
import ahmed from "../assets/avatars/avatar-three.png";
import mark from "../assets/avatars/avatar-four.png";

export interface recentTransfersType {
  name: string;
  image: any;
}

export const RecentTransfersData = [
  {
    name: "Ali",
    image: ali,
  },
  {
    name: "Steve",
    image: steve,
  },
  {
    name: "Ahmed",
    image: ahmed,
  },
  {
    name: "Mark",
    image: mark,
  },
];
