import { HiOutlineDotsVertical } from "react-icons/hi";

const FileCard = ({ thumbnail, itemName, path, onContextMenu }) => {
  
  const handleContextMenu = (event) => {
    event.stopPropagation();
    onContextMenu(event, path, itemName);
    console.log(`Context menu opened! ${path}`);
  };
  
  const handleCardClick = () => {
    console.log(`file ${itemName} at ${path} was clicked`);
  };

  return (
    <div
      className="w-[223px] h-[234px] border rounded-lg m-2 flex flex-col space-y-4 bg-white shadow-lg p-0"
      onClick={handleCardClick}
      onContextMenu={handleContextMenu}
    >
      <div className="w-full h-[175px] flex justify-center items-center overflow-hidden rounded-t-lg">
        <img
          className="w-max h-max object-cover"
          src={`${thumbnail}`}
          alt="Preview"
        />
      </div>
      <div className="flex justify-between items-center px-3 h-auto">
        <h2 className="font-[15px] pl-2 truncate">{itemName}</h2> {/* Use 'itemName' instead of 'fileName' */}
        <div className="icon cursor-pointer rounded-full inline-flex items-center justify-center transition-all duration-0 hover:bg-gray-200 p-1">
          <HiOutlineDotsVertical onClick={handleContextMenu} />
        </div>
      </div>
    </div>
  );
};

export default FileCard;
