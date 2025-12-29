import { RecentTransfersData } from "../../../data/recentTransfers";
import add from "../../../assets/plus.svg";

const RecentTransfers = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-primary-text px-5 mb-4">
        Recent Transfers
      </h3>
      <div className="flex space-x-5 overflow-x-scroll no-scrollbar px-5">
        <div className="bg-[#E6DDFF] w-16 h-16 rounded-full flex items-center justify-center shrink-0">
          <img className="w-3.5 h-3.5" src={add} alt="add" />
        </div>
        {RecentTransfersData.map((item) => (
          <div key={item.name} className="shrink-0">
            <img className="w-16 h-16" src={item.image} alt={item.name} />
            <p className="text-[0.8rem] text-primary-text text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransfers;
