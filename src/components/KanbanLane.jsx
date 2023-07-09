import KanbanCard from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core";

const KanbanLane = ({ lane, cards }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: lane.id,
    data: {
      status: lane.status,
    },
  });

  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div
      className="flex flex-col gap-5 items-center w-96"
      ref={setNodeRef}
      style={style}
    >
      <h2 className="self-start">{lane.title}</h2>
      <button className="p-2 w-96 rounded-md border-2 border-black">+</button>
      {cards
        ?.filter((card) => card.status === lane.status)
        .map((card, index) => (
          <KanbanCard key={card.id} card={card} index={index} />
        ))}
    </div>
  );
};

export default KanbanLane;
