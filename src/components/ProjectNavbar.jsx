import { useParams } from "react-router-dom";
import { useGetProjectDetailQuery } from "../redux/project.slice";

const ProjectNavbar = () => {
  const { projectId } = useParams();
  const { data } = useGetProjectDetailQuery(projectId);
  return (
    <div>
      <h2>{data?.name}</h2>
      <ul className="flex space-x-5">
        <li>Discussion</li>
        <li>Task</li>
      </ul>
    </div>
  );
};

export default ProjectNavbar;
