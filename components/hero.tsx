"use client";

import { useRef } from "react";
import { motion, Variants } from "motion/react";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <main
      ref={containerRef}
      className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center my-16 md:my-28"
    >
      <Spotlight />

      {/* Left side - Content */}
      <motion.div
        className="space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight"
          >
            Frontend Engineer{" "}
            <span className="italic text-muted-foreground">&</span>{" "}
            <span className="italic">Application Architect</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Building{" "}
            <span className="font-serif italic text-foreground text-xl">
              scalable scalable products
            </span>{" "}
            with Next.js and Expo using TypeScript, and modern frontend
            technologies. Specialized in high-throughput real-time WebRTC
            streaming, performance optimization, and best in class user
            experiences.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex gap-4">
          <a
            href="mailto:hey@wriddhi.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with me"
          >
            <RippleButton
              variant="default"
              className="cursor-pointer"
              role="link"
            >
              Connect
              <RippleButtonRipples />
            </RippleButton>
          </a>
          <RippleButton variant="outline" className="cursor-pointer">
            View Code
            <RippleButtonRipples />
          </RippleButton>
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
      <div className="border border-black/20 dark:border-white/20 flex flex-col items-start w-full max-w-sm mx-auto p-4 relative h-120">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard>
          <Image
            src="/image.png"
            alt="Wriddhi"
            width={200}
            height={200}
            className="rounded-full aspect-square object-cover object-[center_top]"
          />
        </EvervaultCard>

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Writing code since 2016.
        </h2>
        <Badge className="mt-4">Bangalore, IN</Badge>
      </div>
    </main>
  );
};
