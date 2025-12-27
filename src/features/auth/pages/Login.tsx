import logo from "../../../assets/logo-purple.png";
import back from "../../../assets/arrow-back.svg";
import phone from "../../../assets/phone.png";
import shield from "../../../assets/shield.png";
import { useState } from "react";
import { telCodes, type telCodesType } from "../../../data/telcodes";
import MobileNumber from "../../../components/common/MobileNumber";
import type { LoginErrorType } from "../../../model/types";
import Button from "../../../components/ui/Button";
import OtherAuthMethods from "../components/OtherAuthMethods";
import PasswordInput from "../../../components/ui/PasswordInput";

const Login = () => {
  const [loginStep, setLoginStep] = useState<string>("mobileNum");
  const [telCode, setTelCode] = useState<telCodesType>(telCodes[0]);
  const [inputMobileNumber, setInputMobileNumber] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [errors, setErrors] = useState<LoginErrorType>({});

  const handleContinue = () => {
    if (!inputMobileNumber) {
      setErrors({
        ...errors,
        phoneNum: "enter mobile number",
      });
    } else {
      setLoginStep("password");
    }
  };

  const handleLogin = () => {
    if (!inputPassword) {
      setErrors({
        ...errors,
        password: "enter password",
      });
    } else {
      if (inputMobileNumber && inputPassword) {
        console.log("Login successful");
      }
    }
  };

  const handleChangePassword = (e: any) => {
    setInputPassword(e.target.value);
  };

  return (
    <div className="bg-white h-screen xl:h-[98.5vh] overflow-scroll no-scrollbar">
      <div className="bg-light-background h-[55%] py-4 relative">
        {loginStep === "password" && (
          <button
            onClick={() => setLoginStep("mobileNum")}
            className="absolute left-[6%] flex space-x-2 items-center"
          >
            <img className="w-[6.48px] h-[10.60px]" src={back} alt="back" />
            <p className="text-primary-color text-sm font-semibold">Back</p>
          </button>
        )}
        <img className="mx-auto w-[88.14px] h-6" src={logo} alt="logo" />
        <div className="flex justify-center mt-14">
          {loginStep === "mobileNum" ? (
            <img
              className="w-[187.69px] h-[190.51px]"
              src={phone}
              alt="phone"
            />
          ) : (
            <img className="w-39 h-48.5" src={shield} alt="security" />
          )}
        </div>
      </div>
      <div className="py-5 px-4">
        {loginStep === "mobileNum" && (
          <div>
            <div className="space-y-6">
              <h2 className="heading-1">
                Enter your <br /> mobile number
              </h2>
              <MobileNumber
                error={errors.phoneNum}
                telCode={telCode}
                setTelCode={setTelCode}
                inputMobileNumber={inputMobileNumber}
                setInputMobileNumber={setInputMobileNumber}
              />
              <div className="mb-7 mt-12">
                <Button variant="btn-primary" onClick={handleContinue}>
                  Continue
                </Button>
              </div>
            </div>
            <OtherAuthMethods />
          </div>
        )}
        {loginStep === "password" && (
          <div>
            <h2 className="heading-1 mt-2 mb-5.5">Enter your password</h2>
            <PasswordInput
              error={errors.password}
              label="password"
              placeholder="Enter your password"
              value={inputPassword}
              onChange={handleChangePassword}
            />
            <p className="mt-4 flex justify-end text-primary-color text-sm font-semibold">
              Forgot password?
            </p>
            <div className="mb-7 mt-32">
              <Button variant="btn-primary" onClick={handleLogin}>
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
