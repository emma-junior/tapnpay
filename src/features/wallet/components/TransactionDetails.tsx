import type { transactionsDataType } from "../../../data/transactionsData";
import flag from "../../../assets/flag.svg";
import copy from "../../../assets/copy.svg";

interface transactionDetailsProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: transactionsDataType;
}

const TransactionDetails = ({
  setShowModal,
  item,
}: transactionDetailsProps) => {
  return (
    <div className="w-full bg-primary-white rounded-t-3xl py-5 px-4">
      <div className="flex justify-between">
        <div className="flex space-x-1.5">
          <img className="w-8 h-8" src={item.image} alt={item.name} />
          <div>
            <p className="text-[0.8rem] font-semibold text-primary-text">
              {item.name}
            </p>
            <p className="text-primary-grey text-[0.8rem]">
              Retailer corporation
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="text-secondary-text text-sm font-semibold"
        >
          Done
        </button>
      </div>

      <div className="my-6 space-y-3">
        <div
          className={`w-full h-16 flex items-center justify-center rounded-lg  ${
            item.amount.startsWith("+")
              ? "bg-[#e6f6ec]"
              : item.amount.startsWith("-")
              ? "bg-primary-red-background "
              : "bg-secondary-grey"
          }`}
        >
          <p
            className={`text-[21px] font-semibold ${
              item.amount.startsWith("+")
                ? "text-primary-green"
                : item.amount.startsWith("-")
                ? "text-primary-red"
                : "text-primary-text"
            }`}
          >
            {item.amount}
          </p>
        </div>
        <div className="w-full h-16 border-2 border-light-grey rounded-lg flex flex-col justify-center px-3">
          <p className="text-primary-grey text-[0.8rem]">Today</p>
          <p className="text-[#535D66] font-semibold text-[0.8rem]">
            December 29, 2022 - 12:32{" "}
          </p>
        </div>
        <div className="w-full h-16 border-2 border-light-grey rounded-lg px-3 flex items-center justify-between">
          <div>
            <p className="text-primary-grey text-[0.8rem]">Today</p>
            <p className="text-[#535D66] font-semibold text-[0.8rem]">
              December 29, 2022 - 12:32{" "}
            </p>
          </div>
          <img className="w-4.5 h-5" src={copy} alt="copy" />
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <img className="w-3.75 h-[15.83px]" src={flag} alt="flag" />
        <p className="text-primary-red text-[14px] font-semibold">
          Report a problem
        </p>
      </div>
    </div>
  );
};

export default TransactionDetails;
