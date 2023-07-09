import KanbanBoard from "../components/KanbanBoard";
import ProjectNavbar from "../components/ProjectNavbar";

const ProjectPage = () => {
  return (
    <div className="bg-[#F1F1F1] h-screen">
      <ProjectNavbar />
      <KanbanBoard />
    </div>
  );
};

export default ProjectPage;
