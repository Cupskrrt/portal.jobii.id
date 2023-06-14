import { useState } from "react";
import NewProjectForm from "../components/projectPageComponents/NewProjectForm";
import ProjectAccordion from "../components/projectPageComponents/ProjectAccordion";
import { useGetProjectQuery } from "../hooks/projectQuery";

const ProjectPage = () => {
  const [addProject, setAddProject] = useState(false);

  const onSuccess = (data) => {
    console.log("Data successfully fetched", data);
  };

  const onError = (error) => {
    console.log("Error", error);
  };
  const { data, isLoading } = useGetProjectQuery(onSuccess, onError);

  const newProjectHandler = () => {
    setAddProject(!addProject);
  };

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-center">
            Time Table Project Jobii
          </h2>
          <button
            onClick={newProjectHandler}
            className="py-2 px-4 text-white bg-blue-500 rounded-lg active:bg-blue-700"
          >
            New
          </button>
        </div>
        {data?.data?.map((project) => {
          return <ProjectAccordion projectData={project} key={project.id} />;
        })}
        {addProject && <NewProjectForm onClick={newProjectHandler} />}
      </div>
    </>
  );
};

export default ProjectPage;
