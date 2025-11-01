import React from 'react';
import Leftabout from './Leftabout';
import Rightabout from './Rightabout';

const About = () => {
  return (
    <div className='h-auto w-full flex flex-col gap-3 py-60 bg-red-800' style={{background:"#060010"}}>
      <div>
      <h1 className='text-white text-7xl font-bold text-center  h-20' >About</h1>
      </div>
      <div className='flex'>
      <Leftabout/>
      <Rightabout/>
      </div>
    </div>
  );
}

export default About;
