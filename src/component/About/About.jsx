import React from 'react';
import Leftabout from './Leftabout';
import Rightabout from './Rightabout';

const About = () => {
  return (
    <div className='h-screen w-full flex gap-3  ' style={{background:"#060010"}}>
      <Leftabout/>
      <Rightabout/>
    </div>
  );
}

export default About;
