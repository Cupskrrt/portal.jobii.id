import { Outlet } from "react-router-dom";
import ProjectSidebar from "../components/ProjectSidebar";

const ProjectLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      <ProjectSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectLayout;
