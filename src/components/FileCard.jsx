import { HiOutlineDotsVertical } from "react-icons/hi";

const FileCard = ({ thumbnail, fileName, onContextMenu }) => {

  const handleIconClick = (event) => {
    event.stopPropagation();
    onContextMenu(event);
  };

  const handleCardClick = () => { 
    console.log('Card clicked!');
  };

  return (
    <div 
        className="w-[223px] h-[234px] border rounded-lg m-2 flex-col space-y-4 bg-white shadow-lg p-0" 
        onClick={handleCardClick}
        onContextMenu={handleIconClick}
    >
        <img className="w-full h-[170px] object-cover rounded-t-lg"
             src={`data:image/jpeg;base64,${thumbnail}`}
             alt='Preview'/>
        <div className="flex justify-between items-center px-3 py-1">
            <h2 className="font-[15] pl-2">{fileName}</h2>
            <div className="icon cursor-pointer rounded-full inline-flex items-center justify-center transition-all duration-0 hover:bg-gray-200 p-1">
                <HiOutlineDotsVertical onClick={handleIconClick} />
            </div>
        </div>
    </div>
  );
};

export default FileCard;
