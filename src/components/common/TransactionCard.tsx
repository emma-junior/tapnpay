import { type transactionsDataType } from "../../data/transactionsData";
import arrowForward from "../../assets/arrow-forward.svg";
import { useState } from "react";
import Modal from "./Modal";
import TransactionDetails from "../../features/wallet/components/TransactionDetails";

interface transactionCardProps {
  item: transactionsDataType;
}

const TransactionCard = ({ item }: transactionCardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className={`flex justify-between py-3.5 border-b border-light-grey last:border-b-0`}
      >
        <div className="flex space-x-1.5">
          <img className="w-8 h-8" src={item.image} alt={item.name} />
          <div>
            <p className="text-[0.8rem] font-semibold text-primary-text">
              {item.name}
            </p>
            <p className="text-primary-grey text-[0.8rem]">
              {item.date} {item.time}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p
            className={`text-[0.8rem] ${
              item.amount.startsWith("+")
                ? "text-primary-green"
                : item.amount.startsWith("-")
                ? "text-primary-red"
                : "text-primary-text"
            }`}
          >
            {item.amount}
          </p>
          <img
            className="w-[5.19px] h-[8.49px]"
            src={arrowForward}
            alt="arrow_forward"
          />
        </div>
      </div>
      <Modal showModal={showModal}>
        <TransactionDetails setShowModal={setShowModal} item={item} />
      </Modal>
    </>
  );
};

export default TransactionCard;
