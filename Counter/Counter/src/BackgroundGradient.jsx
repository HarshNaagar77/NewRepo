import React, { useEffect, useState } from 'react';

function BackgroundGradient() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradientPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const backgroundStyle = {
    position: 'fixed',
    top: 0, 
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1, 
    background: ` 
      radial-gradient(
        circle at ${gradientPosition.x}% ${gradientPosition.y}%,
        rgba(29,53,87,0.85) 0%,
        rgba(69,123,157,0.6) 20%,
        rgba(241,250,238,0.2) 45%,
        transparent 70%
      ),
      url('https://grainy-gradients.vercel.app/noise.svg')
    `,
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    pointerEvents: 'none',
    transition: 'background 0.4s ease',
  };

  return <div style={backgroundStyle}></div>;
}

export default BackgroundGradient; 
