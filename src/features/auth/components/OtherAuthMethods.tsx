import { authMethods } from "../../../data/authMethod";

const OtherAuthMethods = () => {
  return (
    <div>
      <div className="flex space-x-2 items-center justify-between">
        <hr className="w-[30%] border border-solid border-light-grey" />
        <p className="text-[0.8rem] text-primary-grey">or continue using</p>
        <hr className="w-[30%] border border-solid border-light-grey" />
      </div>
      <div className="flex justify-between my-8">
        {authMethods.map((method) => (
          <button
            className="w-[98.67px] xl:w-32 h-11.25 xl:h-14  flex justify-center items-center border-2 border-solid border-light-grey rounded-md"
            key={method.title}
          >
            <img className="w-6 h-6" src={method.image} alt="signin/signup" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default OtherAuthMethods;
