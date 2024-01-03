/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  // const location = useLocation();
  // const getTitle = location.pathname.split("/");
  // let getTitleEnum = getTitle[getTitle.length - 1];

  return (
    <>
      <div>
        <div>Sidebar</div>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
