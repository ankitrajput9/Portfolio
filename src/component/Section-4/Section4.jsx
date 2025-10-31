    import React from 'react';
    import CircularGallery from '@/components/CircularGallery';
    const Section4 = () => {
      return (
        <div className='h-screen w-full bg-auto' style={{background:"#060010"}}>
          <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
        </div>
      );
    }
    
    export default Section4;
    