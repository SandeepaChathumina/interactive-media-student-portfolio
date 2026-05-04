"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-linear-to-br from-white via-green-50 to-emerald-50">
      {/* Animated light green blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-green-300/30 to-emerald-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-linear-to-tr from-green-300/30 to-teal-300/25 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flowing animated circles - Tech aesthetic */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-green-300/40"
          style={{
            width: 40 + i * 30,
            height: 40 + i * 30,
            left: `${10 + i * 11}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            delay: i * 0.15,
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flowing lines with gradient */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.4 }}
      >
        {/* Diagonal flowing lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="0"
            y1={i * 100}
            x2="100%"
            y2={i * 100 + 200}
            stroke="rgb(34, 197, 94)"
            strokeWidth="1"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x1: [0, 50, 0],
              x2: ["100%", "100%", "100%"],
            }}
            transition={{
              delay: i * 0.2,
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Curved flowing paths */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`curve-${i}`}
            d={`M 0,${100 + i * 120} Q ${window.innerWidth / 2},${50 + i * 120} ${window.innerWidth},${100 + i * 120}`}
            fill="none"
            stroke="rgb(16, 185, 129)"
            strokeWidth="2"
            animate={{
              opacity: [0.15, 0.35, 0.15],
              strokeDashoffset: [-400, 0],
            }}
            transition={{
              delay: i * 0.25,
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            strokeDasharray="400"
          />
        ))}
      </svg>

      {/* Floating geometric nodes */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 150 + Math.sin(i) * 50;
        const x = 50 + Math.cos(angle) * distance;
        const y = 50 + Math.sin(angle) * distance;

        return (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-green-400/70"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              delay: i * 0.1,
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Connecting lines between nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`connect-${i}`}
            x1={`${50 + Math.cos((i / 6) * Math.PI * 2) * 150}%`}
            y1={`${50 + Math.sin((i / 6) * Math.PI * 2) * 150}%`}
            x2={`${50 + Math.cos(((i + 1) / 6) * Math.PI * 2) * 150}%`}
            y2={`${50 + Math.sin(((i + 1) / 6) * Math.PI * 2) * 150}%`}
            stroke="rgb(34, 197, 94)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              delay: i * 0.15,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Center accent circle with subtle pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle mouse tracking glow */}
      <motion.div
        className="absolute rounded-full blur-2xl pointer-events-none"
        style={{
          width: 300,
          height: 300,
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
