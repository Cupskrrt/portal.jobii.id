import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <nav className="gap-4 p-4 space-y-4 w-40 text-black bg-white border-r-[1px] border-r-gray-200">
      {/* LOGO */}
      <div className="flex justify-center items-center">
        <img src={logo} className="w-16 h-auto" />
      </div>

      <ul className="space-y-2">
        <li>
          <NavLink
            to={"project"}
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-red-800" : ""
            }
          >
            Projects
          </NavLink>
        </li>
        <>
          <li>
            <NavLink
              to={"create-job"}
              className={({ isActive, isPending }) =>
                isPending ? "text-white" : isActive ? "text-red-800" : ""
              }
            >
              Create Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"applicant"}
              className={({ isActive, isPending }) =>
                isPending ? "text-white" : isActive ? "text-red-800" : ""
              }
            >
              View Applicant
            </NavLink>
          </li>
          <li>
            <NavLink
            to= {"Storage"}
            className={({ isActive, isPending }) =>
                isPending ? "text-white" : isActive ? "text-red-800" : ""}>
              Storage
            </NavLink>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default Sidebar;
