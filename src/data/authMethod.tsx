import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

export interface authMethodsType {
  image: any;
  title: string;
}

export const authMethods: authMethodsType[] = [
  {
    title: "facebook",
    image: facebook,
  },
  {
    title: "google",
    image: google,
  },
  {
    title: "apple",
    image: apple,
  },
];
