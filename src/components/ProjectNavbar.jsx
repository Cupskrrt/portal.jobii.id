import { NavLink, useParams } from "react-router-dom";
import { HiDotsVertical, HiX, HiTrash, HiArchive } from "react-icons/hi";
import { useState } from "react";
import { useGetProjectDetailQuery } from "../query/project/project.query";

const ProjectNavbar = ({ projectName }) => {
  const [popup, setPopup] = useState(false);

  const buttonHandler = () => {
    setPopup(!popup);
    document.querySelector("#project-navbar").classList.toggle("hidden");
  };

  return (
    <div className="p-5 space-y-6 bg-white border-b-2 border-b-gray-200">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">
          {projectName ? projectName : "Select a project"}
        </h2>
        <div className="flex flex-row-reverse gap-3 items-center">
          <button onClick={() => buttonHandler()}>
            {popup ? (
              <HiX className="text-2xl" />
            ) : (
              <HiDotsVertical className="text-2xl" />
            )}
          </button>
          <div className="hidden" id="project-navbar">
            <ul className="flex space-x-3">
              <li className="relative group">
                <HiTrash className="text-2xl" title="Delete Project" />
              </li>
              <li>
                <HiArchive className="text-2xl" />
              </li>
            </ul>
          </div>
        </div>
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
        {/* discussion */}
      </ul>
    </div>
  );
};

export default ProjectNavbar;
