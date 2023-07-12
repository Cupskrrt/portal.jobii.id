import { HiDotsVertical, HiPencil, HiTrash, HiX } from "react-icons/hi";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import CardForm from "./CardForm";
import { useDeleteTaskMutation } from "../query/project/project.query";

const KanbanCard = ({ card }) => {
  const [settingPopup, setSettingPopup] = useState(false);
  const [cardFormPopup, setCardFormPopup] = useState(false);

  const { mutate: deleteTask } = useDeleteTaskMutation();

  const settingPopupHandler = () => {
    setSettingPopup(!settingPopup);
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: {
      status: card.status,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 50px)`,
      }
    : undefined;

  const deleteCardHandler = async (taskId) => {
    deleteTask(taskId);
    setSettingPopup(!settingPopup);
  };

  const cardFormHandler = () => {
    setCardFormPopup(!cardFormPopup);
    setSettingPopup(!settingPopup);
  };

  return (
    <>
      <div
        className="p-3 w-96 bg-white rounded-md border-2"
        ref={setNodeRef}
        style={style}
      >
        <div className="flex justify-between items-center">
          {card.manageBy}
          <div className="flex flex-row-reverse gap-3">
            <button onClick={() => settingPopupHandler()}>
              {settingPopup ? <HiX /> : <HiDotsVertical />}
            </button>
            <div>
              {settingPopup && (
                <ul className="flex space-x-3">
                  <li>
                    <button onClick={() => deleteCardHandler(card.id)}>
                      <HiTrash />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCardFormPopup(!cardFormPopup)}>
                      <HiPencil />
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div {...attributes} {...listeners}>
          <div>
            {new Date(card.startDate).toLocaleDateString()} -{" "}
            {new Date(card.endDate).toLocaleDateString()}
          </div>
          <div>{card.title}</div>
          <div>{card.body}</div>
        </div>
        {/* add subtask handler */}
      </div>
      {cardFormPopup && <CardForm task={card} formPopup={cardFormHandler} />}
    </>
  );
};

export default KanbanCard;
