import { telCodes, type telCodesType } from "../../data/telcodes";
import arrowDown from "../../assets/arrow-down.png";
import warning from "../../assets/warning.svg";
import { useEffect, useRef, useState } from "react";

interface mobileNumProps {
  error?: string;
  telCode: telCodesType;
  setTelCode: React.Dispatch<React.SetStateAction<telCodesType>>;
  inputMobileNumber: string;
  setInputMobileNumber: React.Dispatch<React.SetStateAction<string>>;
}

const MobileNumber = ({
  error,
  telCode,
  setTelCode,
  inputMobileNumber,
  setInputMobileNumber,
}: mobileNumProps) => {
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

  return (
    <div className="w-full">
      <label className="text-[0.8rem] text-primary-black">Mobile number</label>
      <div
        ref={dropdownRef}
        className={`flex items-center h-11.25 border-2 border-solid ${
          error ? "border-primary-red" : "border-secondary-grey"
        }  rounded-md relative`}
      >
        <div
          onClick={() => setIsDropdown(!isDropdown)}
          className="flex space-x-1 items-center p-3"
        >
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
        {error && (
          <img
            className="w-[16.67px] h-[16.67px] absolute right-4 top-1/2 transform -translate-y-1/2"
            src={warning}
            alt="warning"
          />
        )}
        {isDropdown && (
          <ul
            onClick={(e) => e.stopPropagation()}
            className="absolute left-[14%] top-10 transform -translate-x-1/2 text-sm w-24 bg-primary-white border-solid border border-[#E4E4E7] rounded-md z-20"
          >
            {telCodes.map((tel) => (
              <li
                onClick={() => setTelCode(tel)}
                className="space-x-1 w-full flex items-center justify-center text-center py-3 text-primary-black cursor-pointer hover:bg-[#E7F6EC]"
                key={tel.country}
              >
                <img
                  className="w-7 h-5.25"
                  src={tel.image}
                  alt="country_flag"
                />
                <p className="text-sm">{tel.code}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-xs text-primary-red">{error}</p>
    </div>
  );
};

export default MobileNumber;
