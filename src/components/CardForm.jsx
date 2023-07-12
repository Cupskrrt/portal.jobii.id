import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useUpdateTaskMutation } from "../query/project/project.query";
import { useParams } from "react-router-dom";

const CardForm = ({ task, formPopup }) => {
  const { projectId } = useParams();
  const taskForm = useForm({
    defaultValues: {
      id: task.id,
      projectId,
    },
  });
  const startDate = new Date(task.startDate);
  const endDate = new Date(task.endDate);

  const { mutate: updateTask } = useUpdateTaskMutation();

  const {
    register: taskFormRegister,
    control,
    handleSubmit: taskFormSubmit,
  } = taskForm;

  const submitCardForm = (data) => {
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();
    const task = { ...data, startDate, endDate };
    updateTask(task);
    formPopup();
  };

  return (
    <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center w-full h-full bg-gray-600 bg-opacity-80">
      <div className="p-5 bg-white rounded-md">
        <form
          className="flex flex-col space-y-4"
          onSubmit={taskFormSubmit(submitCardForm)}
        >
          <select
            name="managedBy"
            {...taskFormRegister("manageBy")}
            className="border-2 border-gray-200"
            defaultValue={task.manageBy}
          >
            <option value={"Backoffice"}>Backoffice</option>
            <option value={"HR"}>HR</option>
            <option value={"Lapangan"}>Lapangan</option>
          </select>
          <div className="flex justify-between space-x-3 w-96">
            <div className="flex flex-col gap-1">
              <p>Start date</p>
              <input
                type="date"
                defaultValue={startDate.toISOString().substring(0, 10)}
                {...taskFormRegister("startDate")}
                className="border-2 border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>End Date</p>
              <input
                type="date"
                defaultValue={endDate.toISOString().substring(0, 10)}
                {...taskFormRegister("endDate")}
                className="border-2 border-gray-200"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Task Title"
            className="border-2 border-gray-200"
            defaultValue={task.title}
            {...taskFormRegister("title")}
          />
          <textarea
            type="text"
            placeholder="Task Body"
            defaultValue={task.body}
            {...taskFormRegister("body")}
            className="h-14 border-2 border-gray-200 resize-none"
          />
          <button
            type="submit"
            onClick={taskFormSubmit(submitCardForm)}
            className="border-2 border-gray-200 active:bg-blue-200"
          >
            Submit
          </button>
          <DevTool control={control} />
        </form>
      </div>
    </div>
  );
};

export default CardForm;
