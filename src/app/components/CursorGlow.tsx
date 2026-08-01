import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main glow effect */}
      <div
        className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Large outer glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(74, 157, 74, 0.15) 0%, rgba(74, 157, 74, 0.05) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        
        {/* Medium glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)',
            filter: 'blur(15px)',
          }}
        />

        {/* Glass effect */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Inner bright spot */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '40px',
            height: '40px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    </>
  );
}
