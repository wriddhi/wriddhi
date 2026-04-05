"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: "some",
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center my-16 md:my-28"
    >
      {/* Left side - Content */}
      <motion.div
        className="space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-4">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Things I shipped to escape boredom.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex gap-4">
          View code
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-border"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-muted-foreground uppercase tracking-widest">
            <span>Engineer</span>
            <span className="text-foreground/30">•</span>
            <span>Perfectionist</span>
            <span className="text-foreground/30">•</span>
            <span>Problem Solver</span>
            <span className="text-foreground/30">•</span>
            <span>Team Player</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Profile Card */}
    </section>
  );
};
