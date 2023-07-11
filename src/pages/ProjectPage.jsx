import ProjectNavbar from "../components/ProjectNavbar";
import { Outlet, useParams } from "react-router-dom";
import { useGetProjectDetailQuery } from "../query/project/project.query";

const ProjectPage = () => {
  const { projectId } = useParams();
  const { data: projectDetail } = useGetProjectDetailQuery(projectId);
  return (
    <div className="bg-[#F1F1F1] h-screen">
      <ProjectNavbar projectName={projectDetail?.data?.name} />
      <Outlet />
    </div>
  );
};

export default ProjectPage;
