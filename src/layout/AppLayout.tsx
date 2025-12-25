import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-[#e5e5e5] w-screen h-screen xl:py-5">
      <div className="w-full xl:w-[35%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
