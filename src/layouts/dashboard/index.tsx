import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-[15%_auto] lg:grid-cols-[17%_auto]">
        <Sidebar />
        <div>
          <div className="px-5 pt-4 sticky left-0 top-0 z-10 w-full bg-white">
            <Navbar />
          </div>
          <div className="bg-[#F9FAFB] px-5 pt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
