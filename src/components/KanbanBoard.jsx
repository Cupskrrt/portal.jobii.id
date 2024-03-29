import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import KanbanLane from "./KanbanLane";
import { useOutletContext, useParams } from "react-router-dom";
import { useDragTaskMutation } from "../redux/project.slice";

const KanbanBoard = () => {
  const { projectId } = useParams();
  const project = useOutletContext();
  const [dragTask, { isLoading }] = useDragTaskMutation();

  const lanes = [
    { id: 1, status: "NOT_STARTED", title: "Not Started" },
    { id: 2, status: "ON_PROGRESS", title: "On Progress" },
    { id: 3, status: "DONE", title: "Done" },
  ];

  const tasks = project?.tasks;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = async ({ active, over }) => {
    if (active.data.current.status !== over.data.current.status) {
      const draggedTask = tasks.find((task) => task.id === active.id);
      try {
        const cardId = draggedTask.id;
        const laneStatus = over.data.current.status;
        const task = {
          id: cardId,
          status: laneStatus,
          projectId: projectId,
        };

        await dragTask(task);
      } catch (error) {
        console.error(`Error updating card ${draggedTask.id} status:`, error);
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex justify-evenly p-5">
        {lanes.map((lane) => (
          <KanbanLane key={lane.id} lane={lane} cards={tasks} />
        ))}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
