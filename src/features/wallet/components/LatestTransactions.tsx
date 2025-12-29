import { useNavigate } from "react-router-dom";
import TransactionCard from "../../../components/common/TransactionCard";
import { TransactionsData } from "../../../data/transactionsData";

const LatestTransactions = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="flex justify-between mb-4">
        <p className="text-sm font-semibold text-primary-text">
          Latest Transactions
        </p>
        <button
          onClick={() => navigate("/history")}
          className="text-[#6B6B6B] text-[0.8rem]"
        >
          View all
        </button>
      </div>
      <div>
        {TransactionsData.slice(0, 5).map((item) => (
          <TransactionCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestTransactions;
