import { useState } from "react";
import passwordHidden from "../../assets/password-hidden.svg";
import passwordshown from "../../assets/password-shown.svg";
import type { LoginErrorType } from "../../model/types";

interface passwordFormProps {
  errors: LoginErrorType;
  inputPassword: string;
  setInputPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput = ({
  inputPassword,
  setInputPassword,
}: passwordFormProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div>
      <label className="text-[0.8rem] text-primary-black">Password</label>
      <div className="flex items-center border-2 border-solid border-secondary-grey rounded-md h-11.25 relative">
        <input
          type={isPasswordVisible ? "text" : "password"}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full h-full pl-5 outline-none"
        />
        <img
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="w-4.5 h-[17.68px] absolute right-4 top-1/2 transform -translate-y-1/2"
          src={isPasswordVisible ? passwordshown : passwordHidden}
          alt="eye_icon"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
