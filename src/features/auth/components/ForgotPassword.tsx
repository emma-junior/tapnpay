import { useState } from "react";
import Input from "../../../components/ui/Input";
import { telCodes, type telCodesType } from "../../../data/telcodes";
import MobileNumber from "../../../components/common/MobileNumber";
import Button from "../../../components/ui/Button";
import { isValidEmail, isValidPhoneNumber } from "../../../utils/helpers";
import { toast } from "react-toastify";

interface forgotPasswordProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword = ({ setShowModal }: forgotPasswordProps) => {
  const [forgotPasswordMethod, setForgotPasswordMethod] =
    useState<string>("email");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [telCode, setTelCode] = useState<telCodesType>(telCodes[0]);
  const [inputMobileNumber, setInputMobileNumber] = useState<string>("");
  const [mobileError, setMobileError] = useState<string>("");

  const handleOnchangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleEmailResetLink = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
    } else {
      toast.success(`Reset link has been sent to email address`);
      setEmail("");
      setEmailError("");
    }
  };

  const handleMobileResetLink = () => {
    if (!inputMobileNumber) {
      setMobileError("Phone number is required");
    } else if (!isValidPhoneNumber(inputMobileNumber)) {
      setMobileError("Phone number must be 10 digits");
    } else {
      toast.success(`Reset link has been sent to mobile number`);
      setInputMobileNumber("");
      setMobileError("");
    }
  };

  const handleSetResetLink = () => {
    if (forgotPasswordMethod === "email") {
      handleEmailResetLink();
      return;
    }
    if (forgotPasswordMethod === "mobile") {
      handleMobileResetLink();
      return;
    }
  };

  const handleDone = () => {
    setShowModal(false);
    setEmail("");
    setInputMobileNumber("");
  };

  return (
    <div className="w-full bg-primary-white rounded-t-3xl py-5 px-4 space-y-7">
      <div className="flex justify-between">
        <h2 className="text-base text-primary-text font-semibold ">
          Forgot your password?
        </h2>
        <button
          onClick={handleDone}
          className="text-secondary-text text-sm font-semibold"
        >
          Done
        </button>
      </div>
      {forgotPasswordMethod === "email" && (
        <Input
          error={emailError}
          label="email"
          placeholder="e.g. email@example.com"
          value={email}
          onChange={handleOnchangeEmail}
        />
      )}
      {forgotPasswordMethod === "mobile" && (
        <MobileNumber
          error={mobileError}
          telCode={telCode}
          setTelCode={setTelCode}
          inputMobileNumber={inputMobileNumber}
          setInputMobileNumber={setInputMobileNumber}
        />
      )}
      <div className="mt-15 mb-8 space-y-7">
        <Button variant="btn-primary" onClick={handleSetResetLink}>
          Send reset link
        </Button>
        {forgotPasswordMethod === "email" ? (
          <button
            onClick={() => setForgotPasswordMethod("mobile")}
            className="text-secondary-text text-sm font-semibold flex w-full justify-center cursor-pointer"
          >
            Use mobile instead
          </button>
        ) : (
          <button
            onClick={() => setForgotPasswordMethod("email")}
            className="text-secondary-text text-sm font-semibold flex w-full justify-center cursor-pointer"
          >
            Use email instead
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
