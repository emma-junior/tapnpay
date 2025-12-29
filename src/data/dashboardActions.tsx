import topup from "../assets/upload-line.svg";
import withdraw from "../assets/download-line.svg";
import transfer from "../assets/exchange-funds-line.svg";

interface actionsType {
  title: string;
  icon: any;
}

export const DashboardActions: actionsType[] = [
  {
    title: "Top up",
    icon: topup,
  },
  {
    title: "Withdraw",
    icon: withdraw,
  },
  {
    title: "Transfer",
    icon: transfer,
  },
];
