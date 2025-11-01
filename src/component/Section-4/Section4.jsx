import React from 'react';
import CircularGallery from '@/components/CircularGallery';
const Section4 = () => {
  return (
    <div className='h-screen w-full  'style={{background:"#060010"}} >
        <h1 className='text-white text-7xl font-bold text-center py-10'>Projects</h1>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={5} textColor="#ffffff" borderRadius={0.07} scrollEase={0.02} />
      </div>
    </div>
  );
}

export default Section4;
