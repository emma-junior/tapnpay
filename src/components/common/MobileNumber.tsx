import { type telCodesType } from "../../data/telcodes";
import type { LoginErrorType } from "../../model/types";
import arrowDown from "../../assets/arrow-down.png";

interface mobileNumProps {
  errors: LoginErrorType;
  telCode: telCodesType;
  setTelCode: React.Dispatch<React.SetStateAction<telCodesType>>;
  inputMobileNumber: string;
  setInputMobileNumber: React.Dispatch<React.SetStateAction<string>>;
}

const MobileNumber = ({
  telCode,
  inputMobileNumber,
  setInputMobileNumber,
}: mobileNumProps) => {
  return (
    <div>
      <label className="text-[0.8rem] text-primary-black">Mobile number</label>
      <div className="flex items-center border-2 border-solid border-secondary-grey rounded-md">
        <div className="flex space-x-1 items-center p-3">
          <img className="w-7 h-5.25" src={telCode.image} alt="country_flag" />
          <p className="text-sm">{telCode.code}</p>
          <img
            className="w-[8.49px] h-[5.66px]"
            src={arrowDown}
            alt="arrow_down"
          />
        </div>
        <input
          type="number"
          value={inputMobileNumber}
          onChange={(e) => setInputMobileNumber(e.target.value)}
          placeholder="7X-XXXXXXX"
          className="w-full h-full pl-5 outline-none"
        />
      </div>
    </div>
  );
};

export default MobileNumber;
