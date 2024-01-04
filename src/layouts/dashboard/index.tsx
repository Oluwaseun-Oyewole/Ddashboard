import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-[15%_auto] lg:grid-cols-[18%_auto] h-screen">
        <Sidebar />
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
