import { useSortable } from "@dnd-kit/sortable";
import { useDraggable } from "@dnd-kit/core";

const KanbanCard = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: {
      status: card.status,
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="w-96 border-2 border-black"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div>{card.manageBy}</div>
      <div>
        {new Date(card.startDate).toLocaleDateString()} -{" "}
        {new Date(card.endDate).toLocaleDateString()}
      </div>
      <div>{card.title}</div>
      <div>{card.body}</div>
      {/* add subtask handler */}
    </div>
  );
};

export default KanbanCard;
