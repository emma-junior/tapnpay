import { useEffect, useRef, useState } from "react";
import filter from "../../../assets/filter-icon.svg";

interface filteredTransactionsProps {
  filteredQuery: string;
  setFilteredQuery: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTransactions = ({
  filteredQuery,
  setFilteredQuery,
}: filteredTransactionsProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdown(false);
      }
    };

    if (isDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdown, setIsDropdown]);

  const handleAll = () => {
    setFilteredQuery("");
    setIsDropdown(!isDropdown);
  };
  const handleSent = () => {
    setFilteredQuery("sent");
    setIsDropdown(!isDropdown);
  };
  const handleReceived = () => {
    setFilteredQuery("received");
    setIsDropdown(!isDropdown);
  };

  return (
    <div
      ref={dropdownRef}
      onClick={() => setIsDropdown(!isDropdown)}
      className="w-full h-10 flex items-center justify-center border-2 border-solid border-[#E1E3ED] rounded-md space-x-1.5 relative"
    >
      <img className="w-[16.67px] h-[16.67px]" src={filter} alt="filter_icon" />
      <p className="text-[14px] text-primary-text capitalize">
        {filteredQuery || "Filter"}
      </p>
      {isDropdown && (
        <ul
          onClick={(e) => e.stopPropagation()}
          className="absolute left-0 top-10 text-sm w-full bg-primary-white border-solid border border-[#E4E4E7] rounded-md z-20"
        >
          <li
            onClick={handleAll}
            className="text-[0.8rem] text-center py-2 text-primary-black cursor-pointer hover:bg-[#E7F6EC]"
          >
            All
          </li>
          <li
            onClick={handleSent}
            className="text-[0.8rem] text-center py-2 text-primary-black cursor-pointer hover:bg-[#E7F6EC]"
          >
            Sent
          </li>
          <li
            onClick={handleReceived}
            className="text-[0.8rem] text-center py-2 text-primary-black cursor-pointer hover:bg-[#E7F6EC]"
          >
            Received
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterTransactions;
