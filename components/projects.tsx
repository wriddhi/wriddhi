"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";
import { projects } from "@/constants/data";
import { Badge } from "@/components/ui/badge";

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
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
      id="projects"
      ref={containerRef}
      className="relative z-10 max-w-7xl mx-auto px-6 my-16 md:my-28 scroll-mt-20"
    >
      <motion.div
        className="space-y-4 mb-12 md:mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight"
        >
          Selected Works
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          Products and experiments I&apos;ve shipped — from festival-scale
          traffic to quiet beta launches.
        </motion.p>
      </motion.div>

      <motion.ul
        className="flex flex-col gap-10 md:gap-14"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.li
            key={project.name}
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 md:gap-10 border-t border-border border-dotted pt-8"
          >
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-3xl md:text-4xl font-serif tracking-tight">
                {project.name}
              </h3>
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 font-serif italic"
                >
                  Live site →
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground underline underline-offset-4"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight) => (
                  <div key={highlight.title} className="space-y-1">
                    <h4 className="font-serif text-lg">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
