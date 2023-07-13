import { NavLink } from "react-router-dom";

const ProjectNavbar = ({ projectName }) => {
  return (
    <div className="p-5 space-y-6 bg-white border-b-2 border-b-gray-200">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{projectName}</h2>
      </div>
      <ul className="flex space-x-5">
        <li>
          <NavLink
            to={"task"}
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-red-800" : ""
            }
          >
            Task
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProjectNavbar;
