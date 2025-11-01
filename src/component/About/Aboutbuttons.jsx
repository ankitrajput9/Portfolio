import React from 'react';

const Aboutbuttons = ({skill}) => {
  return (
    <div>
      <button className='px-8 py-2   bg-pink-900 mask-b-from-0.5 hover:mask-none  rounded-3xl  font-bold '>{skill}</button>
    </div>
  );
}

export default Aboutbuttons;
