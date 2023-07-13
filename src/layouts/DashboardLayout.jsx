import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#f1f1f1]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
