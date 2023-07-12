import KanbanCard from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core";
import { HiPlus } from "react-icons/hi";
import { useCreateTaskMutation } from "../query/project/project.query";
import { useParams } from "react-router-dom";

const KanbanLane = ({ lane, cards }) => {
  const { projectId } = useParams();
  const { isOver, setNodeRef } = useDroppable({
    id: lane.id,
    data: {
      status: lane.status,
    },
  });

  const { mutate: createTask } = useCreateTaskMutation();

  const style = {
    color: isOver ? "green" : undefined,
  };

  const createCard = (lane) => {
    const data = { projectId, status: lane.status };
    createTask(data);
  };

  return (
    <div
      className="flex relative flex-col gap-5 items-center max-h-[50rem]"
      ref={setNodeRef}
      style={style}
    >
      <div className="sticky top-0 bg-[#F1F1F1]">
        <h2 className="self-start">{lane.title}</h2>
        <button
          className="flex justify-center items-center p-2 w-96 text-center bg-white rounded-md border-black"
          onClick={() => createCard(lane)}
        >
          <HiPlus />
        </button>
      </div>
      {cards
        ?.filter((card) => card.status === lane.status)
        .map((card, index) => (
          <KanbanCard key={card.id} card={card} index={index} />
        ))}
    </div>
  );
};

export default KanbanLane;
