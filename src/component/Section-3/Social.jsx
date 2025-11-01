import React from 'react';

const Social = ({socioName,link}) => {
  return (
    <div className=''>
   <a
        className="text-white  hover:text-blue-500 transition-colors duration-300 "
     href={link}
    target="_blank"
    rel="noopener noreferrer"
  >{socioName}</a>
    </div>
  );
}

export default Social;
