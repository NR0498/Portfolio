import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function MinecraftBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Transform scroll progress to control which scene is visible
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const scene3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const scene4Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  // Parallax effect for each scene
  const scene1Y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const scene2Y = useTransform(scrollYProgress, [0.2, 0.6], [50, -150]);
  const scene3Y = useTransform(scrollYProgress, [0.5, 0.9], [50, -150]);
  const scene4Y = useTransform(scrollYProgress, [0.8, 1], [50, -100]);

  return (
    <div ref={ref} className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Scene 1: Minecraft Plains/Grassland */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: scene1Opacity, y: scene1Y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#98D8E8] to-[#7CB342] opacity-40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=1920')`,
            filter: 'blur(1px)',
          }}
        />
      </motion.div>

      {/* Scene 2: Minecraft Forest/Trees */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: scene2Opacity, y: scene2Y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A7C59] via-[#2D5016] to-[#1A1A1A] opacity-40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920')`,
            filter: 'blur(1px)',
          }}
        />
      </motion.div>

      {/* Scene 3: Minecraft Mountain/Cave */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: scene3Opacity, y: scene3Y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A5A5A] via-[#3A3A3A] to-[#1A1A1A] opacity-40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')`,
            filter: 'blur(1px)',
          }}
        />
      </motion.div>

      {/* Scene 4: Minecraft Night/Stars */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: scene4Opacity, y: scene4Y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0A0A0A] opacity-50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920')`,
            filter: 'blur(1px)',
          }}
        />
        {/* Stars effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Overlay to blend with dark theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]/90 pointer-events-none" />
    </div>
  );
}
