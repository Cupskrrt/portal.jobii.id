import { Link } from "react-router-dom";
import { HiChevronDown, HiPlus } from "react-icons/hi";
import { useGetProjectQuery } from "../query/project/project.query";
import ProjectForm from "./ProjectForm";
import { useState } from "react";

const ProjectSidebar = () => {
  const [createProject, setCreateProject] = useState(false);
  const { data: project } = useGetProjectQuery();

  const popupHandler = () => {
    setCreateProject(!createProject);
  };

  return (
    <div className="flex flex-col justify-between py-4 px-6 border-r-[1px] border-r-gray-200">
      <ul className="flex flex-col">
        <li className="flex flex-col items-start">
          <div className="flex items-center">
            <HiChevronDown />
            Project
          </div>
          <ul>
            {project?.data?.map((project) => (
              <li key={project.id}>
                {project.status === "ACTIVE" && (
                  <Link to={`${project.id}`}>{project.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col items-start">
          <div className="flex items-center">
            <HiChevronDown />
            Archived
          </div>
          <ul>
            {project?.data?.map((project) => (
              <li key={project.id}>
                {project.status === "ARCHIVED" && (
                  <Link to={`${project.id}`}>{project.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button
        className="flex relative gap-3 justify-center items-center p-2 text-white bg-blue-500 rounded-md active:bg-blue-700"
        onClick={() => popupHandler()}
      >
        <HiPlus />
        Create project
      </button>
      {createProject && <ProjectForm popup={popupHandler} />}
    </div>
  );
};

export default ProjectSidebar;
