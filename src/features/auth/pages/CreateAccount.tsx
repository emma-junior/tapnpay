import logo from "../../../assets/logo-purple.png";
import back from "../../../assets/arrow-back.svg";
import Input from "../../../components/ui/Input";
import { useState } from "react";
import type { SignupErrorType } from "../../../model/types";
import PasswordInput from "../../../components/ui/PasswordInput";
import Button from "../../../components/ui/Button";
import OtherAuthMethods from "../components/OtherAuthMethods";

const CreateAccount = () => {
  const [formData, setFormData] = useState<SignupErrorType>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<SignupErrorType>({});

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setErrors({});
  };

  return (
    <div className="bg-white h-screen xl:h-[98.5vh] overflow-scroll no-scrollbar">
      <div className="py-4 relative">
        <button className="absolute left-[6%] mt-1 flex space-x-2 items-center">
          <img className="w-[6.48px] h-[10.60px]" src={back} alt="back" />
          <p className="text-primary-color text-sm font-semibold">Back</p>
        </button>
        <img className="mx-auto w-[88.14px] h-6" src={logo} alt="logo" />
      </div>
      <div className="pb-5 pt-32 px-4">
        <h2 className="my-4 heading-1">Create Account</h2>
        <form className="space-y-4">
          <Input
            error={errors.name}
            label="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            error={errors.email}
            label="email"
            placeholder="e.g. email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <PasswordInput
            error={errors.password}
            label="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex items-center space-x-2">
            <input className="w-5 h-5" type="checkbox" />
            <p className="text-[0.8rem] text-primary-black">
              I accept{" "}
              <span className="text-primary-color">terms and conditions</span>{" "}
              and <span className="text-primary-color">privacy policy</span>
            </p>
          </div>
          <div className="mb-7 mt-12">
            <Button variant="btn-primary" onClick={handleSubmit}>
              Create a new account
            </Button>
          </div>
        </form>
        <OtherAuthMethods />
      </div>
    </div>
  );
};

export default CreateAccount;
