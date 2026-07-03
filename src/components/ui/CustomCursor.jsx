"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Main cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configurations
  const springConfig = {
    damping: 25,
    stiffness: 350,
    mass: 0.5,
  };

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Even smoother for glow effect
  const glowSpringConfig = {
    damping: 30,
    stiffness: 200,
    mass: 0.8,
  };
  const glowX = useSpring(cursorX, glowSpringConfig);
  const glowY = useSpring(cursorY, glowSpringConfig);

  // Particle system
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorX.set(x - 6);
      cursorY.set(y - 6);
      setMousePosition({ x, y });

      // Spawn particles on move
      if (isVisible && !isHovering && Math.random() > 0.7) {
        spawnParticle(x, y);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      // Welcome burst of particles
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          spawnParticle(window.innerWidth / 2, window.innerHeight / 2);
        }, i * 50);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setParticles([]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const link = target.closest("a");
      const button = target.closest("button");
      const input = target.closest("input");
      const textarea = target.closest("textarea");
      const interactive = target.closest(".interactive");
      const project = target.closest(".project-card");

      if (link) {
        setCursorText("→");
        setIsHovering(true);
      } else if (button) {
        setCursorText("✦");
        setIsHovering(true);
      } else if (input || textarea) {
        setCursorText("✎");
        setIsHovering(true);
      } else if (project) {
        setCursorText("+");
        setIsHovering(true);
      } else if (interactive) {
        setCursorText("◆");
        setIsHovering(true);
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorText("");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible, isHovering]);

  const spawnParticle = (x, y) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 100 + 50;
    const size = Math.random() * 4 + 2;
    const colors = [
      "rgba(255,255,255,0.8)",
      "rgba(100,200,255,0.6)",
      "rgba(255,100,200,0.6)",
    ];

    setParticles((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      },
    ]);

    // Remove particle after animation
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => p.id !== Date.now() + Math.random()),
      );
    }, 1000);
  };

  // Update particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 0.016,
            y: p.y + p.vy * 0.016,
            life: p.life - 0.02,
            size: p.size * 0.995,
          }))
          .filter((p) => p.life > 0),
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  // Animation variants
  const cursorVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
        mass: 0.5,
      },
    },
    hover: {
      scale: 2.5,
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "2px solid rgba(255,255,255,0.8)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
        mass: 0.5,
      },
    },
    click: {
      scale: 0.7,
      backgroundColor: "rgba(255,255,255,0.3)",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 600,
        mass: 0.3,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
    hover: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    click: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  const textVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: { duration: 0.2 },
    },
  };

  const ringVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      transition: {
        delay: 0.05,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    hover: {
      scale: 2,
      opacity: 0.5,
      borderColor: "rgba(255,255,255,0.3)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    click: {
      scale: 1.5,
      opacity: 0.6,
      transition: { duration: 0.1 },
    },
  };

  const glowVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.15,
      transition: {
        delay: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    hover: {
      scale: 3,
      opacity: 0.25,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    click: {
      scale: 2,
      opacity: 0.3,
      transition: { duration: 0.1 },
    },
  };

  const getCursorState = () => {
    if (isClicking) return "click";
    if (isHovering) return "hover";
    return "visible";
  };

  return (
    <>
      {/* Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9997] rounded-full"
            style={{
              x: particle.x - particle.size / 2,
              y: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.life * 0.8,
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              opacity: particle.life * 0.8,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </AnimatePresence>

      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          background:
            "radial-gradient(circle, rgba(100,200,255,0.1) 0%, transparent 70%)",
        }}
        variants={glowVariants}
        animate={isVisible ? getCursorState() : "hidden"}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          border: "1px solid rgba(255,255,255,0.2)",
        }}
        variants={ringVariants}
        animate={isVisible ? getCursorState() : "hidden"}
      />

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          width: 24,
          height: 24,
          marginLeft: -12,
          marginTop: -12,
        }}
        variants={cursorVariants}
        animate={isVisible ? getCursorState() : "hidden"}
      >
        {/* Inner dot */}
        <motion.div
          className="absolute rounded-full bg-white"
          style={{
            width: 6,
            height: 6,
          }}
          variants={dotVariants}
          animate={isVisible ? getCursorState() : "hidden"}
        />

        {/* Hover text */}
        <AnimatePresence mode="wait">
          {isHovering && cursorText && (
            <motion.span
              key={cursorText}
              className="text-white text-xs font-bold relative z-10"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                textShadow: "0 0 20px rgba(255,255,255,0.5)",
              }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trailing dots effect (optional) */}
      <AnimatePresence>
        {isVisible && !isHovering && (
          <>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`trail-${i}`}
                className="fixed pointer-events-none z-[9995] rounded-full"
                style={{
                  x: smoothX,
                  y: smoothY,
                  width: 4 - i * 0.5,
                  height: 4 - i * 0.5,
                  backgroundColor: `rgba(255,255,255,${0.2 - i * 0.05})`,
                  marginLeft: -2 + i * 0.5,
                  marginTop: -2 + i * 0.5,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 0.2 - i * 0.05,
                  x: smoothX.get() - i * 8,
                  y: smoothY.get() - i * 8,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 150,
                  delay: i * 0.05,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
