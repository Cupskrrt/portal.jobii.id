import { useRef, useState } from "react";
import {
  useDeleteProjectItemQuery,
  useDeleteProjectQuery,
} from "../../hooks/projectQuery";
import {
  RxChevronRight,
  RxPlus,
  RxChevronDown,
  RxTrash,
  RxPencil2,
} from "react-icons/rx";
import ProjectItemForm from "./ProjectItemForm";

const ProjectAccordion = ({ projectData }) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const [addNewItem, setAddNewItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef(null);

  const { mutate: deleteProject } = useDeleteProjectQuery();
  const { mutate: deleteProjectItem } = useDeleteProjectItemQuery();

  const handleAccordion = () => {
    setToggleAccordion(!toggleAccordion);
    setHeight(toggleAccordion ? "0px" : "20rem");
  };

  const handleCreateNewProjectItem = () => {
    setAddNewItem(!addNewItem);
  };

  const handleUpateProjectItem = () => {
    setEditItem(!editItem);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center">
        <button
          className="flex justify-between items-center appearance-none cursor-pointer hover:bg-gray-200 focus:outline-none"
          onClick={() => handleAccordion()}
        >
          {toggleAccordion ? (
            <RxChevronDown className="w-6 h-auto" />
          ) : (
            <RxChevronRight className="w-6 h-auto" />
          )}
        </button>
        <p className="inline-block text-lg text-start light">
          {projectData.namaProject}
        </p>
        <button onClick={() => deleteProject(projectData.id)}>
          <RxTrash className="w-5 h-auto hover:bg-gray-200" />
        </button>
        {toggleAccordion && (
          <button onClick={() => handleCreateNewProjectItem()}>
            <RxPlus className="w-5 h-auto active:bg-gray-200" />
          </button>
        )}
      </div>

      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto duration-700 ease-in-out transition-max-height"
      >
        <div className="p-5 border-black border-b-[1px]">
          <table className="table-fixed w-[50rem]">
            <tr className="border-black border-b-[1px]">
              <th>Nama</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Managed By</th>
              <th>Notes</th>
            </tr>
            {projectData.projectItem.map((item) => {
              const startDate = new Date(item.startDate);
              const endDate = new Date(item.endDate);

              return (
                <tr
                  key={item.itemId}
                  className="text-center border-b-gray-500 border-b-[1px]"
                  onDoubleClick={() => handleEditRow(item.itemId)}
                >
                  <>
                    <td className="p-3">{item.nama}</td>
                    <td className="p-3">{item.status}</td>
                    <td className="p-3">{startDate.toLocaleDateString()}</td>
                    <td className="p-3">{endDate.toLocaleDateString()}</td>
                    <td className="p-3">{item.manageBy}</td>
                    <td className="p-3">{item.notes}</td>
                    <td className="flex gap-5 items-center p-3">
                      <button>
                        <RxPencil2
                          className="w-6 h-auto"
                          onClick={handleUpateProjectItem}
                        />
                      </button>
                      <button onClick={() => deleteProjectItem(item.itemId)}>
                        <RxTrash className="w-6 h-auto" />
                      </button>
                    </td>
                  </>

                  {editItem && (
                    <ProjectItemForm
                      id={item.itemId}
                      popup={handleUpateProjectItem}
                      update={true}
                      itemData={item}
                    />
                  )}
                </tr>
              );
            })}
          </table>
          {addNewItem && (
            <ProjectItemForm
              id={projectData.id}
              popup={handleCreateNewProjectItem}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectAccordion;
