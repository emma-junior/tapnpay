import profilePic from "../../../assets/avatars/avatar-one.png";
import settings from "../../../assets/settings-white.svg";
import { DashboardActions } from "../../../data/dashboardActions";
import LatestTransactions from "../components/LatestTransactions";
import RecentTransfers from "../components/RecentTransfers";

const Home = () => {
  return (
    <div>
      <div className="bg-[#270685] px-5 py-7">
        <div className="flex justify-between">
          <div className="flex items-center space-x-1.5">
            <img className="w-12 h-12" src={profilePic} alt="profile_picture" />
            <p className="text-primary-white text-sm font-semibold">
              Hello, <br /> Abdullah!
            </p>
          </div>
          <img className="w-[19.28px] h-5" src={settings} alt="settings" />
        </div>
        <div className=" mt-5 px-5 py-6 w-full bg-white/10 backdrop-blur-md rounded-2xl">
          <p className="text-[#B2A1E4] text-[0.8rem] text-center">
            Main balance
          </p>
          <h2 className="text-[36px] font-semibold text-primary-white text-center">
            $14,235<span className="text-[18px] font-normal">.34</span>
          </h2>
          <div className="mt-4.5 grid grid-cols-3">
            {DashboardActions.map((item, index) => (
              <div
                className="relative flex flex-col items-center space-y-3"
                key={item.title}
              >
                {index !== 0 && (
                  <span
                    className="
            absolute left-0 top-1/2 -translate-y-1/2
            h-6 w-0 border border-[#6F45E9]
          "
                  />
                )}
                <img
                  className="w-3 h-[12.67px]"
                  src={item.icon}
                  alt={item.title}
                />
                <p className="text-[0.8rem] text-primary-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-6 space-y-6">
        <RecentTransfers />
        <LatestTransactions />
      </div>
    </div>
  );
};

export default Home;
