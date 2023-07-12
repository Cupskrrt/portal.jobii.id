import { HiX } from "react-icons/hi";
import { useCreateProjectMutation } from "../query/project/project.query";
import { useForm } from "react-hook-form";

const ProjectForm = ({ popup }) => {
  const { mutate: createProject } = useCreateProjectMutation();

  const projectForm = useForm();

  const createProjectHandler = (data) => {
    createProject(data);
    popup();
  };

  const { register, handleSubmit } = projectForm;

  return (
    <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center w-full h-full bg-gray-600 bg-opacity-80">
      <form
        className="flex flex-col p-5 space-y-3 bg-white rounded-md"
        onSubmit={handleSubmit(createProjectHandler)}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">Create Project</h4>
          <HiX
            className="text-xl hover:cursor-pointer"
            onClick={() => popup()}
          />
        </div>
        <input
          type="text"
          placeholder="Project Name"
          className="border-2 border-gray-200"
          {...register("name")}
        />
        <button onClick={handleSubmit(createProjectHandler)}>
          Create project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
