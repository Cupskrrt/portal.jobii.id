import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LoginPage from "../pages/LoginPage";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <LoginPage />
      </div>
    </div>
  );
};

export default DashboardLayout;
