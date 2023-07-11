import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { useGetProjectQuery } from "../query/project/project.query";

const ProjectSidebar = () => {
  const { data: project } = useGetProjectQuery();

  return (
    <div className="py-4 px-6 border-r-[1px] border-r-gray-200">
      <ul className="flex flex-col">
        <li className="flex flex-col items-center">
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
        <li className="flex flex-col items-center">
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
    </div>
  );
};

export default ProjectSidebar;
