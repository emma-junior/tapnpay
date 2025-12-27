import jordan from "../assets/jordan.png";

export interface telCodesType {
  image: any;
  code: string;
  country: string;
}

export const telCodes: telCodesType[] = [
  {
    image: jordan,
    code: "+962",
    country: "Jordan",
  },
  {
    image: jordan,
    code: "+234",
    country: "Nigeria",
  },
];
