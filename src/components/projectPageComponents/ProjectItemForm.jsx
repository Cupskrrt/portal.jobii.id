import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import {
  useCreateProjectItemQuery,
  useUpdateProjectItemQuery,
} from "../../hooks/projectQuery";

const ProjectItemForm = ({ id, popup, update, itemData }) => {
  const projectItemForm = useForm({});
  const updateItemForm = useForm({
    defaultValues: {
      nama: itemData?.nama,
      status: itemData?.status,
      startDate: itemData?.startDate,
      endDate: itemData?.endDate,
      manageBy: itemData?.manageBy,
      notes: itemData?.notes,
    },
  });

  const {
    register: projectItemRegister,
    reset,
    handleSubmit,
  } = projectItemForm;

  const {
    register: updateItemRegister,
    reset: updateFormReset,
    handleSubmit: updateFormSubmit,
  } = updateItemForm;

  const { mutate: createProjectItem } = useCreateProjectItemQuery();
  const { mutate: updateProjectItem } = useUpdateProjectItemQuery();

  const handleAddProjectItem = (data) => {
    createProjectItem({ data, id });
    reset();
    popup();
  };

  const handleUpdateProjectItem = (data) => {
    const id = itemData?.itemId;
    updateProjectItem({ data, id });
    updateFormReset(), popup();
  };

  const startDate = new Date(itemData?.startDate);
  const endDate = new Date(itemData?.endDate);

  return (
    <>
      {update ? (
        <div className="flex fixed inset-0 z-10 justify-center items-center w-full h-full bg-gray-600 bg-opacity-60">
          <div className="p-5 space-y-4 bg-white rounded-xl">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold">Update Todo</h4>
              <RxCross2
                className="w-5 h-auto hover:cursor-pointer"
                onClick={() => popup()}
              />
            </div>
            <form
              className="flex flex-col justify-center items-start space-y-5"
              noValidate
            >
              <input
                type="text"
                placeholder={itemData?.nama}
                {...updateItemRegister("nama")}
              />
              <select
                {...updateItemRegister("status")}
                placeholder={itemData?.status}
              >
                <option value={"Not started"}>Not started</option>
                <option value={"On progress"}>On progress</option>
                <option value={"Done"}>Done</option>
              </select>
              <div className="flex flex-col">
                <label>Start Date: {startDate.toLocaleDateString()}</label>
                <input
                  type="date"
                  placeholder={itemData?.startDate}
                  {...updateItemRegister("startDate")}
                />
              </div>
              <div className="flex flex-col">
                <label>End Date: {endDate.toLocaleDateString()}</label>
                <input
                  type="date"
                  placeholder={itemData?.endDate}
                  {...updateItemRegister("endDate")}
                />
              </div>
              <select
                {...updateItemRegister("manageBy")}
                placeholder={itemData?.manageBy}
              >
                <option value={"Backoffice"}>Backoffice</option>
                <option value={"Lapangan"}>Lapangan</option>
                <option value={"HR"}>HR</option>
              </select>
              <input
                type="text"
                placeholder={itemData?.notes}
                {...updateItemRegister("notes")}
              />
              <button
                type="button"
                className="self-center p-2 text-white bg-gray-600 rounded-lg active:bg-gray-200"
                onClick={updateFormSubmit(handleUpdateProjectItem)}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      ) : (
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
              <input
                type="text"
                placeholder="Title"
                {...projectItemRegister("nama")}
              />
              <select {...projectItemRegister("status")}>
                <option value={"Not started"}>Not started</option>
                <option value={"On progress"}>On progress</option>
                <option value={"Done"}>Done</option>
              </select>
              <div className="flex flex-col">
                <label>Start Date</label>
                <input
                  type="date"
                  placeholder="Start date"
                  {...projectItemRegister("startDate")}
                />
              </div>
              <div className="flex flex-col">
                <label>End Date</label>
                <input
                  type="date"
                  placeholder="End date"
                  {...projectItemRegister("endDate")}
                />
              </div>
              <select {...projectItemRegister("manageBy")}>
                <option value={"Backoffice"}>Backoffice</option>
                <option value={"Lapangan"}>Lapangan</option>
                <option value={"HR"}>HR</option>
              </select>
              <input
                type="text"
                placeholder="notes"
                {...projectItemRegister("notes")}
              />
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
      )}
    </>
  );
};

export default ProjectItemForm;
