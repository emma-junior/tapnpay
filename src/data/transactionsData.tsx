import walmart from "../assets/brands/Walmart.png";
import netflix from "../assets/brands/Netflix.png";
import amazon from "../assets/brands/amazon.png";
import adidas from "../assets/brands/adidas.png";
import nike from "../assets/brands/nike.png";
import apple from "../assets/brands/apple.png";
import costco from "../assets/brands/costco.png";
import gap from "../assets/brands/gap.png";
import homeDepot from "../assets/brands/home-depot.png";
import reebok from "../assets/brands/home-depot.png";

export interface transactionsDataType {
  name: string;
  image: any;
  amount: string;
  date: string;
  time: string;
  transactionType: string;
}

export const TransactionsData: transactionsDataType[] = [
  {
    name: "Walmart",
    image: walmart,
    amount: "-$35.23",
    date: "Today",
    time: "12:32",
    transactionType: "sent",
  },
  {
    name: "Netflix",
    image: netflix,
    amount: "-$13.00",
    date: "Today",
    time: "12:40",
    transactionType: "sent",
  },
  {
    name: "Reebok",
    image: reebok,
    amount: "+$430.00",
    date: "Yesterday",
    time: "11:12",
    transactionType: "received",
  },
  {
    name: "Amazon",
    image: amazon,
    amount: "-$12.29",
    date: "Yesterday",
    time: "12:32",
    transactionType: "sent",
  },
  {
    name: "Nike",
    image: nike,
    amount: "-$50.23",
    date: "Today",
    time: "12:00",
    transactionType: "sent",
  },
  {
    name: "Costco",
    image: costco,
    amount: "-$120.23",
    date: "December",
    time: "12:04",
    transactionType: "sent",
  },
  {
    name: "Home Depot",
    image: homeDepot,
    amount: "-$80.23",
    date: "December",
    time: "12:04",
    transactionType: "sent",
  },
  {
    name: "Adidas",
    image: adidas,
    amount: "+$180.23",
    date: "Yesterday",
    time: "12:04",
    transactionType: "received",
  },
  {
    name: "Apple",
    image: apple,
    amount: "-$60.23",
    date: "Today",
    time: "12:04",
    transactionType: "sent",
  },
  {
    name: "Gap",
    image: gap,
    amount: "-$50.23",
    date: "Yesterday",
    time: "12:04",
    transactionType: "sent",
  },
];
