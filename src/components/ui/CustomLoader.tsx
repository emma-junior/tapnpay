import logo from "../../assets/logo-white.png";

const CustomLoader = () => {
  return (
    <div className="bg-primary-color h-screen xl:h-[99vh] flex justify-center items-center ">
      <img
        className="w-[176.86px] h-[48.16px] md:w-60 md:h-auto xl:w-[176.86px] xl:h-[48.16px] animate-pulse"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default CustomLoader;
