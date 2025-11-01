import React from 'react';
import Aboutbuttons from './Aboutbuttons';

const Leftabout = () => {
  return (
    <div className='h-screen w-1/2  flex justify-center flex-col  gap-5 p-10 text-white relative'>
      <p className=' text-m font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a vel fuga qui soluta sed esse, corrupti, perspiciatis aut tempora, natus modi consequuntur repellendus. </p>
      <h1 className='text-2xl font-bold' >Skills & Technologies</h1>
<div className='flex gap-5 flex-wrap '>
      <Aboutbuttons  skill="HTML"/>
      <Aboutbuttons  skill="CSS"/>
      <Aboutbuttons  skill="JavaScript"/>
      <Aboutbuttons  skill="React"/>
      <Aboutbuttons  skill="GitHub"/>
</div>
      <h1 className='text-2xl font-bold' >FrameWorks</h1>
<div className='flex gap-5'>
      <Aboutbuttons  skill="React Bits"/>
    
</div>


    </div>
  );
}

export default Leftabout;
