import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedGlobe() {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex items-center justify-center">
      {/* Outer Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-primary/20 blur-[80px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* The Sphere */}
      <div className="relative w-[70%] h-[70%] rounded-full overflow-hidden shadow-[0_0_50px_rgba(79,124,255,0.4),inset_0_0_50px_rgba(168,85,247,0.6)] z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/50 to-background opacity-90 mix-blend-screen" />
        
        {/* Globe Grid / Texture lines */}
        <div className="absolute inset-0 rounded-full border border-primary/30" />
        <div className="absolute inset-0 rounded-full border border-accent/20 scale-90" />
        <div className="absolute inset-0 rounded-full border border-primary/20 scale-75" />
        
        {/* Particles on surface */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Orbital Rings */}
      <motion.svg 
        className="absolute inset-0 w-full h-full text-primary/30 z-20"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(30 50 50)" />
        <motion.circle 
          cx="90" cy="30" r="1.5" fill="hsl(var(--primary))" 
          className="glow-box"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>
      
      <motion.svg 
        className="absolute inset-0 w-full h-full text-accent/30 z-20"
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(-45 50 50)" />
        <motion.circle 
          cx="15" cy="80" r="1" fill="hsl(var(--accent))" 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
      
      <motion.svg 
        className="absolute inset-0 w-full h-full text-cyan-400/20 z-0"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="50" cy="50" rx="40" ry="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      </motion.svg>
    </div>
  );
}
