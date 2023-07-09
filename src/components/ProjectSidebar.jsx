import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGetProjectQuery } from "../redux/project.slice";

const ProjectSidebar = () => {
  const { data } = useGetProjectQuery();

  return (
    <div className="py-4 px-6 border-r-[1px] border-r-gray-200">
      <ul className="flex flex-col">
        <li className="flex flex-col items-center">
          <div className="flex items-center">
            <HiChevronDown />
            Project
          </div>
          <ul>
            {data?.map((project) => (
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
            {data?.map((project) => (
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
