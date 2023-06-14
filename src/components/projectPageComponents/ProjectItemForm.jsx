import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useCreateProjectItemQuery } from "../../hooks/projectQuery";

const ProjectItemForm = ({ id, popup }) => {
  const projectItemForm = useForm({});
  const { register, reset, handleSubmit } = projectItemForm;
  const { mutate } = useCreateProjectItemQuery();

  const handleAddProjectItem = (data) => {
    mutate({ data, id });
    reset();
    popup();
  };

  return (
    <div className="flex fixed inset-0 z-10 justify-center items-center w-full h-full bg-gray-600 bg-opacity-60">
      <div className="p-5 space-y-4 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">Add new todo</h4>
          <RxCross2
            className="w-5 h-auto hover:cursor-pointer"
            onClick={() => popup()}
          />
        </div>
        <form
          className="flex flex-col justify-center items-start space-y-5"
          noValidate
        >
          <input type="text" placeholder="Title" {...register("nama")} />
          <select {...register("status")}>
            <option value={"Not started"}>Not started</option>
            <option value={"On progress"}>On progress</option>
            <option value={"Done"}>Done</option>
          </select>
          <div className="flex flex-col">
            <label>Start Date</label>
            <input
              type="date"
              placeholder="Start date"
              {...register("startDate")}
            />
          </div>
          <div className="flex flex-col">
            <label>End Date</label>
            <input
              type="date"
              placeholder="End date"
              {...register("endDate")}
            />
          </div>
          <select {...register("manageBy")}>
            <option value={"Backoffice"}>Backoffice</option>
            <option value={"Lapangan"}>Lapangan</option>
            <option value={"HR"}>HR</option>
          </select>
          <input type="text" placeholder="notes" {...register("notes")} />
          <button
            type="button"
            className="self-center p-2 text-white bg-gray-600 rounded-lg active:bg-gray-200"
            onClick={handleSubmit(handleAddProjectItem)}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectItemForm;
