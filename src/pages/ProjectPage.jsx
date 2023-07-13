import {
  HiCheckCircle,
  HiExclamationCircle,
  HiPlay,
  HiPlus,
  HiTrash,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  useDeleteProjectMutation,
  useGetProjectQuery,
} from "../redux/project.slice";
import { useState } from "react";
import ProjectForm from "../components/ProjectForm";

const ProjectPage = () => {
  const [createProjectPopup, setCreateProjectPopup] = useState(false);
  const { data: project } = useGetProjectQuery();
  const [deleteProject] = useDeleteProjectMutation();

  const projectPopupHandler = () => {
    setCreateProjectPopup(!createProjectPopup);
  };

  const button = async ({ e, projectId }) => {
    e.preventDefault();
    await deleteProject(projectId);
  };

  return (
    <>
      <div className="bg-[#F1F1F1] h-screen p-5 space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold uppercase">Projects</h4>
          <button
            className="flex gap-3 items-center p-2 font-semibold text-white bg-blue-400 rounded-md"
            onClick={() => projectPopupHandler()}
          >
            <HiPlus />
            Create Project
          </button>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {project
            ?.filter((project) => project.status === "ACTIVE")
            .map((project) => {
              return (
                <Link key={project.id} to={project.id}>
                  <div className="p-3 space-y-3 w-64 bg-white rounded-md">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold">{project.name}</p>
                      <button
                        onClick={(e) => button({ e, projectId: project.id })}
                      >
                        <HiTrash />
                      </button>
                    </div>
                    <div>
                      <p>Task status</p>
                      <div className="flex gap-5">
                        <div className="flex gap-3 items-center">
                          <HiExclamationCircle className="text-xl text-red-600" />
                          <p>
                            {
                              project.tasks.filter(
                                (task) => task.status === "NOT_STARTED"
                              ).length
                            }
                          </p>
                        </div>

                        <div className="flex gap-3 items-center">
                          <HiPlay className="text-xl text-blue-600" />
                          <p>
                            {
                              project.tasks.filter(
                                (task) => task.status === "ON_PROGRESS"
                              ).length
                            }
                          </p>
                        </div>

                        <div className="flex gap-3 items-center">
                          <HiCheckCircle className="text-xl text-green-600" />
                          <p>
                            {
                              project.tasks.filter(
                                (task) => task.status === "DONE"
                              ).length
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="flex">
          <h4 className="text-2xl font-bold uppercase">Archived</h4>
          <div className="flex gap-5 justify-center">
            {project
              ?.filter((project) => project.status === "ARCHIVED")
              .map((project) => {
                return (
                  <div
                    key={project.id}
                    className="p-3 space-y-3 w-64 bg-white rounded-md"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold">{project.name}</p>
                      <HiTrash />
                    </div>
                    <div>
                      <p>Task status</p>
                      <div className="flex gap-5">
                        <div className="flex gap-3 items-center">
                          <HiExclamationCircle className="text-xl" />
                          <p>
                            {
                              project.tasks.filter(
                                (task) => task.status === "NOT_STARTED"
                              ).length
                            }
                          </p>
                        </div>

                        <div className="flex gap-3 items-center">
                          <HiPlay className="text-xl" />
                          <p>
                            {
                              project.tasks.filter(
                                (task) => task.status === "ON_PROGRESS"
                              ).length
                            }
                          </p>
                        </div>

                        <div className="flex gap-3 items-center">
                          <HiCheckCircle className="text-xl" />
                          <p>
                            {
                              project.tasks.filter(
                                (task) => task.status === "DONE"
                              ).length
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {createProjectPopup && <ProjectForm popup={projectPopupHandler} />}
    </>
  );
};

export default ProjectPage;
