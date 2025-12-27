import { useState } from "react";
import passwordHidden from "../../assets/password-hidden.svg";
import passwordshown from "../../assets/password-shown.svg";

interface passwordFormProps {
  error?: string;
  value?: string;
  label: string;
  placeholder: string;
  onChange?: any;
}

const PasswordInput = ({
  error,
  value,
  label,
  placeholder,
  onChange,
}: passwordFormProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  console.log(error);
  return (
    <div>
      <label className="text-[0.8rem] text-primary-black capitalize">
        {label}
      </label>
      <div
        className={`flex items-center border-2 border-solid ${
          error ? "border-primary-red" : "border-secondary-grey"
        } rounded-md h-11.25 relative`}
      >
        <input
          type={isPasswordVisible ? "text" : "password"}
          name={label}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className="w-full h-full pl-5 outline-none"
        />
        <img
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="w-4.5 h-[17.68px] absolute right-4 top-1/2 transform -translate-y-1/2"
          src={isPasswordVisible ? passwordshown : passwordHidden}
          alt="eye_icon"
        />
      </div>
      <p className="text-xs text-primary-red">{error}</p>
    </div>
  );
};

export default PasswordInput;
