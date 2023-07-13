import { Outlet, useParams } from "react-router-dom";
import ProjectNavbar from "../components/ProjectNavbar";
import { useGetProjectDetailQuery } from "../redux/project.slice";

const ProjectLayout = () => {
  const { projectId } = useParams();
  const { data: project } = useGetProjectDetailQuery(projectId);
  return (
    <div className="flex flex-col h-screen">
      <ProjectNavbar projectName={project?.name} />
      <div className="flex-1">
        <Outlet context={project} />
      </div>
    </div>
  );
};

export default ProjectLayout;
