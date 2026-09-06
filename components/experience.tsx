"use client";

import { Timeline } from "@/components/ui/timeline";
import Marquee from "react-fast-marquee";
import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import {
  SiAmazonwebservices,
  SiDocker,
  SiExpo,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from "@/components/animate-ui/components/base/tooltip";
import { repeatArray } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { Livekit } from "@/icons/livekit";
import Image from "next/image";
import { experiences, journeyIntro } from "@/constants/data";

type Skill = {
  title: string;
  icon: IconType;
};

export const Experience = () => {
  const data = experiences.map((entry) => ({
    title: entry.period,
    content: (
      <div className="flex flex-col gap-4 border-2 border-border border-dotted p-2 md:p-4 lg:p-8 rounded-xl bg-muted/20">
        <h3 className="text-2xl font-serif md:text-3xl flex justify-between items-center gap-2">
          {entry.roleTitle}
          <Image
            src={entry.logo}
            alt={entry.logoAlt}
            width={28}
            height={28}
            className="rounded-full"
          />
        </h3>
        <span className="font-bold text-lg md:text-lg flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2">
          {entry.position}
          <a
            href={entry.organisationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline font-serif font-bold tracking-wide italic"
          >
            {entry.organisation}
          </a>
        </span>
        <ul className="text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 list-disc list-outside pl-4 space-y-2">
          {entry.bullets.map((bullet) => (
            <li key={bullet.slice(0, 48)}>{bullet}</li>
          ))}
        </ul>
      </div>
    ),
  }));

  const skills = [
    { title: "React", icon: FaReact },
    { title: "Next.js", icon: SiNextdotjs },
    { title: "React Native", icon: TbBrandReactNative },
    { title: "Expo", icon: SiExpo },
    { title: "TypeScript", icon: SiTypescript },
    { title: "TailwindCSS", icon: SiTailwindcss },
    { title: "Livekit", icon: Livekit },
    { title: "PostgreSQL", icon: SiPostgresql },
    { title: "Docker", icon: SiDocker },
    { title: "Terraform", icon: SiTerraform },
    { title: "Amazon Web Services", icon: SiAmazonwebservices },
  ] as const satisfies Skill[];

  const repeatedSkills = repeatArray([...skills], 10);

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
    <div id="experience" className="flex flex-col gap-20 scroll-mt-20">
      <Timeline data={data} subtitle={journeyIntro} />

      <div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="pt-4 md:pt-8 border-t border-border"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-mono text-muted-foreground uppercase tracking-widest">
            <code>STACK</code>
          </div>
        </motion.div>
        <Marquee
          pauseOnHover
          gradient
          gradientColor="var(--background)"
          gradientWidth="100px"
          className="border-b border-border border-dotted py-4 md:py-8 max-w-screen overflow-hidden"
        >
          {repeatedSkills.map((skill, index) => (
            <Tooltip key={`${skill.title}-${index}`} followCursor>
              <TooltipTrigger delay={0} className="mr-8 md:mr-20">
                <skill.icon className="size-8 md:size-12 text-foreground transition-colors" />
              </TooltipTrigger>
              <TooltipPanel>
                <p>{skill.title}</p>
              </TooltipPanel>
            </Tooltip>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
