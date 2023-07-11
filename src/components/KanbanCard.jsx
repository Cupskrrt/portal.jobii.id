import { HiDotsVertical, HiPencil, HiTrash, HiX } from "react-icons/hi";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

const KanbanCard = ({ card }) => {
  const [popup, setPopup] = useState(false);
  // TODO: add global edit state with card id
  const popupHandler = () => {
    setPopup(!popup);
    // document.querySelector(`card-misc${card.id}`).classList.toggle("hidden");
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

  const deleteCardHandler = async (id) => {
    document.querySelector("#card-misc").classList.toggle("hidden");
  };

  return (
    <div
      className="p-3 w-96 bg-white rounded-md border-2"
      ref={setNodeRef}
      style={style}
      onClick={() => setPopup(!popup)}
    >
      <div className="flex justify-between items-center">
        {card.manageBy}
        <div className="flex flex-row-reverse gap-3">
          <button onClick={() => popupHandler()}>
            {popup ? <HiX /> : <HiDotsVertical />}
          </button>
          <div>
            {popup && (
              <ul className="flex space-x-3">
                <li>
                  <button onClick={() => deleteCardHandler(card.id)}>
                    <HiTrash />
                  </button>
                </li>
                <li>
                  <button>
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
  );
};

export default KanbanCard;
