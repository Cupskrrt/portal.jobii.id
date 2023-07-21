import { HiFolder } from "react-icons/hi";

const FolderCard = ({ folderName, onContextMenu, path, selected, changeDirectory}) => {
  const handleIconClick = (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the window
    onContextMenu(event);
  };

  const handleCardClick = () => {
    console.log(`Folder ${folderName} at ${path} clicked!`);
  };

  const handleCardDoubleClick = () => {
    console.log(`changing diretory to ${folderName}`);
    changeDirectory(path);
  };

  // Add a new 'selected' class if this card is the selected card
  const cardClasses = "w-[223px] h-[66px] border rounded-lg m-2 flex items-center space-x-4 shadow-lg" +
    (selected ? " bg-blue-500" : " bg-white");

  return (
    <div 
      className={cardClasses}
      onClick={handleCardClick}
      onDoubleClick={handleCardDoubleClick}
      onContextMenu={handleIconClick}
    >
      <div className="pl-5">
        <HiFolder className="h-6 w-6 text-black" />
      </div>
      <div>
        <h2 className="text-xs font-[15px]">{folderName}</h2>
      </div>
    </div>
  );
};

export default FolderCard;
