import React from 'react';

const Breadcrumb = ({ currentDirectory, changeDirectory }) => {
  // Split the path into segments
  const parts = currentDirectory.split("/").filter(Boolean);

  // If there are no parts, don't display the breadcrumb
  if (parts.length === 0) {
    return null;
  }

  const handleLinkClick = (index) => {
    if (index === -1) {
      // If the index is -1, it means the "Jobii" breadcrumb was clicked
      changeDirectory("/");
    } else {
      const newPath = "/" + parts.slice(0, index + 1).join("/");
      changeDirectory(newPath);
    }
  };

  return (
    <div className='text-lg font-bold inline-block'>
      <a 
        onClick={() => handleLinkClick(-1)} 
        style={{color: 'black', cursor: 'pointer'}}
        onMouseOver={(e) => e.target.style.color = 'blue'}
        onMouseOut={(e) => e.target.style.color = 'black'}
      >
        Jobii
      </a>
      {" > "}
      {parts.map((part, index) => (
        <span key={index}>
          {
            index === parts.length - 1 
            ? <span style={{color: 'black'}}>{part}</span> 
            : <a 
                onClick={() => handleLinkClick(index)} 
                style={{color: 'black', cursor: 'pointer', marginLeft: '5px', marginRight: '5px'}}
                onMouseOver={(e) => e.target.style.color = 'blue'}
                onMouseOut={(e) => e.target.style.color = 'black'}
              >
                {part}
              </a>
          }
          {index < parts.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
  
};

export default Breadcrumb;
