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
import {
  bio,
  email,
  githubUrl,
  heroTraits,
  location,
  name,
  title,
  titleAccent,
} from "@/constants/data";

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
      id="home"
      ref={containerRef}
      className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center my-16 md:my-28 scroll-mt-20"
    >
      <Spotlight />

      <motion.div
        className="space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono uppercase tracking-widest text-muted-foreground"
          >
            Hello — I&apos;m {name.split(" ")[0]}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight"
          >
            {title} <span className="italic text-muted-foreground">&</span>{" "}
            <span className="italic">{titleAccent}</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {bio}
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a
            href={`mailto:${email}`}
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
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View code on GitHub"
          >
            <RippleButton
              variant="outline"
              className="cursor-pointer"
              role="link"
            >
              View Code
              <RippleButtonRipples />
            </RippleButton>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-border"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-muted-foreground uppercase tracking-widest">
            {heroTraits.map((trait, index) => (
              <span key={trait} className="contents">
                {index > 0 && (
                  <span className="text-foreground/30" aria-hidden>
                    •
                  </span>
                )}
                <span>{trait}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="border border-black/20 dark:border-white/20 flex flex-col items-start w-full max-w-sm mx-auto p-4 relative h-120">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard>
          <Image
            src="/image.png"
            alt={name}
            width={200}
            height={200}
            className="rounded-full aspect-square object-cover object-[center_top]"
            priority
          />
        </EvervaultCard>

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Writing code since 2016.
        </h2>
        <Badge className="mt-4">{location}</Badge>
      </div>
    </main>
  );
};
