"use client";
import {
  useScroll,
  useTransform,
  motion,
  Variants,
  useInView,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  subtitle = "See what I\u2019ve been up to over the years.",
}: {
  data: TimelineEntry[];
  subtitle?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: "some",
  });
  const [height, setHeight] = useState(0);

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

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.section
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative z-10 max-w-7xl mx-auto px-6"
    >
      <div className="space-y-4 mx-auto py-8 md:py-20">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight"
        >
          Journey
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="hidden h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black md:flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-serif text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-0 pr-0 md:px-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-serif text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute hidden md:block md:left-8 top-0 overflow-hidden w-[2px] bg-linear-to-b from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99% [linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-foreground/60 via-foreground/30 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
