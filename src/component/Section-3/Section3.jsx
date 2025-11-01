import LaserFlow from '@/components/LaserFlow';
import React from 'react';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import TextPressure from '@/components/TextPressure';
import CircularGallery from '@/components/CircularGallery';
import Social from './Social';


<div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
  <LaserFlow/>
</div>

const Section3 = () => {
    const revealImgRef = useRef(null);
  return (
    <div 
      style={{ 
        height: '800px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#060010'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '88%',
        height: '50%',
        backgroundColor: '#060010',
        borderRadius: '30px',
        border: '2px solid #FF79C6',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        color: 'white',
        fontSize: '1.5rem',
        zIndex: 6,
        padding: '20px',
       flexDirection:"column",
      }}>
        {/* Your content here */}
<div style={{position: 'relative', height: '150px'}}>
  <TextPressure
    text="Ankit rajput"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={106}
  />
</div>
        {/* Your content Second here */}
<div className=' flex flex-col items-center justify-center text-center gap-8'>
<h1>I'am a Web Developer and Yes I Developed soo many things.. </h1>
<p className='text-base'>i love to work on web development and i am very passionate about it. I have worked on many projects and have a good experience in this field. I am always looking for new opportunities to learn and grow my skills. </p>
<div className='  flex items-center justify-center gap-15'>
<Social socioName={<Github size={36} />} link="https://github.com/ankitrajput9"/>
<Social socioName={<Instagram size={36} />} link="https://web.telegram.org/k/"/>
<Social socioName={<Linkedin size={36} />} link="https://github.com/ankitrajput9"/>
</div>




</div>

      </div>

      <img
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}

export default Section3;
