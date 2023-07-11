import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const NewTaskCard = ({ popup, laneStatus }) => {
  const { projectId } = useParams();
  const taskForm = useForm({});

  const {
    register: taskFormRegister,
    control,
    handleSubmit: taskFormSubmit,
  } = taskForm;

  const handleAddNewTask = async (data) => {
    const payload = { ...data, status: laneStatus };
    popup();
  };
  return (
    <div className="p-3 w-96 bg-white rounded-md">
      <form
        onSubmit={taskFormSubmit(handleAddNewTask)}
        className="flex flex-col space-y-4"
      >
        <select
          name="managedBy"
          {...taskFormRegister("manageBy")}
          className="border-2 border-gray-200"
        >
          <option value={""}>--Select Assignee--</option>
          <option value={"Backoffice"}>Backoffice</option>
          <option value={"HR"}>HR</option>
          <option value={"Lapangan"}>Lapangan</option>
        </select>
        <div className="flex justify-between space-x-3">
          <div className="flex flex-col gap-1">
            <p>Start date</p>
            <input
              type="date"
              {...taskFormRegister("startDate")}
              className="border-2 border-gray-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>End Date</p>
            <input
              type="date"
              {...taskFormRegister("endDate")}
              className="border-2 border-gray-200"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Task Title"
          className="border-2 border-gray-200"
          {...taskFormRegister("title")}
        />
        <textarea
          type="text"
          placeholder="Task Body"
          {...taskFormRegister("body")}
          className="h-14 border-2 border-gray-200 resize-none"
        />
        <button
          type="submit"
          onSubmit={() => taskFormSubmit(handleAddNewTask)}
          className="border-2 border-gray-200 active:bg-blue-200"
        >
          Submit
        </button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default NewTaskCard;
