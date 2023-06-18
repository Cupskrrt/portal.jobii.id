import { useForm } from "react-hook-form";
import { useCreateProjectQuery } from "../../hooks/projectQuery";

const NewProjectForm = ({ onClick }) => {
  const projectForm = useForm({});

  const { register, reset, handleSubmit } = projectForm;
  const { mutate } = useCreateProjectQuery();

  const submitHandler = (data) => {
    mutate(data);
    reset();
    onClick();
  };

  return (
    <form noValidate onSubmit={handleSubmit(submitHandler)}>
      <div className="flex justify-between items-center shadow-black">
        <input
          placeholder="Nama Project"
          className="p-2 rounded-xl border-black border-[1px]"
          {...register("namaProject", { required: true })}
        />
        <button
          className="p-2 rounded-xl border-black active:bg-gray-400 border-[1px]"
          onClick={handleSubmit(submitHandler)}
        >
          Create Project
        </button>
      </div>
    </form>
  );
};

export default NewProjectForm;
