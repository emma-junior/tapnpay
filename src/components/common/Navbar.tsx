import { NavigationData } from "../../data/navigationData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 bg-primary-white flex w-full xl:w-[30%] justify-between pb-5">
      {/* <div className="flex w-full justify-between"> */}
      {NavigationData.map((item) => (
        <NavLink
          key={item.title}
          className={({ isActive }) =>
            `w-[25%] h-15.5 flex flex-col items-center justify-center border-t-[3px] ${
              isActive ? "border-t-primary-color" : "border-t-secondary-grey"
            }`
          }
          to={item.path}
        >
          {({ isActive }) => (
            <>
              <img
                className="w-5.5 h-[19.65px]"
                src={isActive ? item.iconActive : item.icon}
                alt="nav_icon"
              />
              <span
                className={`text-[0.8rem] mt-2 ${
                  isActive ? "text-primary-color" : "text-primary-grey"
                }`}
              >
                {item.title}
              </span>
            </>
          )}
        </NavLink>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
