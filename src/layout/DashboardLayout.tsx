import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-white h-screen xl:h-[98.5vh] overflow-scroll no-scrollbar">
      <Outlet />

      <Navbar />
    </div>
  );
};

export default DashboardLayout;
