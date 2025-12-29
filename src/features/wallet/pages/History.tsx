import { useEffect, useState } from "react";
import SearchInput from "../../../components/ui/SearchInput";
import {
  TransactionsData,
  type transactionsDataType,
} from "../../../data/transactionsData";
import useDebounce from "../../../hooks/useDebounce";
import FilterTransactions from "../components/FilterTransactions";
import TransactionCard from "../../../components/common/TransactionCard";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedTransaction, setSearchedTransaction] = useState<
    transactionsDataType[] | []
  >(TransactionsData);
  const [filteredQuery, setFilteredQuery] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 500);

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (!debouncedSearch && !filteredQuery) {
      setSearchedTransaction(TransactionsData);

      return;
    }

    const filteredTransaction = TransactionsData.filter((transaction) => {
      const matchesSearch =
        !debouncedSearch ||
        transaction.name.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesFilter =
        !filteredQuery ||
        transaction.transactionType
          .toLowerCase()
          .includes(filteredQuery.toLowerCase());

      return matchesSearch && matchesFilter;
    });

    setSearchedTransaction(filteredTransaction);
  }, [debouncedSearch, filteredQuery]);

  const filteredByToday = searchedTransaction.filter(
    (transaction) => transaction.date === "Today"
  );

  const filteredByYesterday = searchedTransaction.filter(
    (transaction) => transaction.date === "Yesterday"
  );

  const filteredByDecember = searchedTransaction.filter(
    (transaction) => transaction.date === "December"
  );

  return (
    <div className="py-5">
      <h2 className="px-4 mb-2.5 text-[24px] text-primary-text font-semibold">
        History
      </h2>
      <div className="flex justify-between px-4">
        <div className="w-[70%]">
          <SearchInput
            placeholder="search name"
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
        <div className="w-[28%]">
          <FilterTransactions
            filteredQuery={filteredQuery}
            setFilteredQuery={setFilteredQuery}
          />
        </div>
      </div>
      {filteredByToday.length > 0 && (
        <>
          <div className="py-5 px-4">
            <h2 className="text-[#535D66] text-base">Today</h2>
            {filteredByToday.map((item) => (
              <TransactionCard key={item.name} item={item} />
            ))}
          </div>
          <hr className=" w-full border-4 border-light-grey" />
        </>
      )}
      {filteredByYesterday.length > 0 && (
        <>
          {" "}
          <div className="py-5 px-4">
            <h2 className="text-[#535D66] text-base">Yesterday</h2>
            {filteredByYesterday.map((item) => (
              <TransactionCard key={item.name} item={item} />
            ))}
          </div>
          <hr className=" w-full border-4 border-light-grey" />
        </>
      )}
      {filteredByDecember.length > 0 && (
        <>
          <div className="py-5 px-4">
            <h2 className="text-[#535D66] text-base">Yesterday</h2>
            {filteredByDecember.map((item) => (
              <TransactionCard key={item.name} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default History;
