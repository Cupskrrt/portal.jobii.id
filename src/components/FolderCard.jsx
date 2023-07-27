import { HiFolder } from "react-icons/hi";

const FolderCard = ({ itemName, onContextMenu, path, selected, changeDirectory }) => {
  const handleIconClick = (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the window
    onContextMenu(event, path, itemName);
    console.log(`Context menu opened for ${itemName}`)
  };

  const handleCardClick = () => {
    console.log(`Folder ${itemName} at ${path} clicked!`);
  };

  const handleCardDoubleClick = () => {
    console.log(`changing directory to ${itemName}`);
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
        <h2 className="text-xs font-[15px]">{itemName}</h2>
      </div>
    </div>
  );
};

export default FolderCard;
