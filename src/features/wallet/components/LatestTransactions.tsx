import TransactionCard from "../../../components/common/TransactionCard";
import { TransactionsData } from "../../../data/transactionsData";

const LatestTransactions = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between mb-4">
        <p className="text-sm font-semibold text-primary-text">
          Latest Transactions
        </p>
        <p className="text-[#6B6B6B] text-[0.8rem]">View all</p>
      </div>
      <div>
        {TransactionsData.map((item) => (
          <TransactionCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestTransactions;
