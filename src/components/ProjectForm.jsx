import { HiX } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useCreateProjectMutation } from "../redux/project.slice";

const ProjectForm = ({ popup }) => {
  const [createProject] = useCreateProjectMutation();

  const projectForm = useForm();

  const createProjectHandler = async (data) => {
    await createProject(data);
    popup();
  };

  const { register, handleSubmit } = projectForm;

  return (
    <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center w-full h-full bg-gray-600 bg-opacity-80">
      <div className="p-5 bg-white rounded-md">
        <form
          className="flex flex-col space-y-3"
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
    </div>
  );
};

export default ProjectForm;
