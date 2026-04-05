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
import { Badge } from "@/components/ui/badge";
import { repeatArray } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { Livekit } from "@/icons/livekit";
import Image from "next/image";

type Experience = {
  title: string;
  content: React.ReactNode;
};

type Skill = {
  title: string;
  icon: IconType;
};

export const Experience = () => {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div className="flex flex-col gap-4 border-2 border-border border-dotted p-2 md:p-4 lg:p-8 rounded-xl bg-muted/20">
          <h3 className="text-2xl font-serif md:text-3xl flex justify-between items-center gap-2">
            The Software Engineer
            <Image
              src="/omaza.png"
              alt="Omaza"
              width={28}
              height={28}
              className="rounded-full"
            />
          </h3>
          <span className="font-bold text-lg md:text-lg flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2">
            SDE-1
            <a
              href="https://omaza.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline font-serif font-bold tracking-wide italic"
            >
              Omaza
            </a>
          </span>
          <ul className="text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 list-disc list-outside pl-4 space-y-2">
            <li>
              Worked on performance critical user facing <b>webview</b>{" "}
              frontends implementing cross provider live streaming support using{" "}
              <b>WebRTC</b>, real time chats with other users with optimistic
              updates handling <b>25k+ requests / second</b>.
            </li>
            <li>
              Implemented a real time calling and chat system, rich analytics
              graphs and map in internal admin dashboard for lead management
              resulting in <b>60-65%</b> effiency increase in acquiring new
              leads for the sales team.
            </li>
            <li>
              Built fully end-to-end type-safe internal tooling to manage
              two-way callbacks between webview and native layer using the{" "}
              <Badge variant="outline" className="mx-1">
                window.postMessage
              </Badge>
              bridge, improving reliability and developer velocity across teams.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div className="flex flex-col gap-4 border-2 border-border border-dotted p-2 md:p-4 lg:p-8 rounded-xl bg-muted/20">
          <h3 className="text-2xl font-serif md:text-3xl flex justify-between items-center gap-2">
            The Open Source Maintainer
            <Image
              src="/atlas.png"
              alt="Pujo Atlas"
              width={28}
              height={28}
              className="rounded-full"
            />
          </h3>
          <span className="font-bold text-lg md:text-lg flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2">
            Frontend Lead
            <a
              href="https://atlas.ourkolkata.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline font-serif font-bold tracking-wide italic"
            >
              Pujo Atlas
            </a>
          </span>
          <ul className="text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 list-disc list-outside pl-4 space-y-2">
            <li>
              Built and scaled a Google Maps-based navigation web app to help
              users find the nearest Durga Pujo pandals across Kolkata, driving{" "}
              <b>872.49K</b> searches and <b>114.83K</b> journeys in just{" "}
              <b>5 days</b>.
            </li>
            <li>
              Designed a location-aware ranking algorithm that prioritizes
              results by user proximity (not global popularity), supporting{" "}
              <b>10.8K</b> visitors/day during peak Pujo traffic.
            </li>
            <li>
              Mentored students during <b>Hacktoberfest 2024</b> in writing
              clean, scalable and maintainable code with strict code reviews and
              constructive feedback.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div className="flex flex-col gap-4 border-2 border-border border-dotted p-2 md:p-4 lg:p-8 rounded-xl bg-muted/20">
          <h3 className="text-2xl font-serif md:text-3xl flex justify-between items-center gap-2">
            The Intern
            <Image
              src="/zscaler.svg"
              alt="Zscaler"
              width={28}
              height={28}
              className="rounded-full"
            />
          </h3>
          <span className="font-bold text-lg md:text-lg flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2">
            Frontend Intern
            <a
              href="https://zscaler.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline font-serif font-bold tracking-wide italic"
            >
              Zscaler
            </a>
          </span>
          <ul className="text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 list-disc list-outside pl-4 space-y-2">
            <li>
              Migrated the frontend data layer to modern fetching + caching
              using Axios and React Query, improving loading states across{" "}
              <b>100+</b> components while removing redundant logic to boost
              overall performance.
            </li>
            <li>
              Standardized build tooling across a micro-frontend monorepo by
              unifying on Webpack (replacing Vite/Rollup), cutting build times
              by <b>20%</b> and improving maintainability across <b>15+</b>{" "}
              applications.
            </li>
            <li>
              Implemented code-splitting to reduce initial JavaScript bundle
              size by <b>30%</b>, leading to faster first-load performance and
              lower user wait time.
            </li>
            <li>
              Improved React front-end test coverage from <b>75%</b> to{" "}
              <b>88%</b> using Jest + React Testing Library, validated via
              SonarQube.
            </li>
          </ul>
        </div>
      ),
    },
  ] as const satisfies Experience[];

  const skills = [
    {
      title: "React",
      icon: FaReact,
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
    },
    {
      title: "React Native",
      icon: TbBrandReactNative,
    },
    {
      title: "Expo",
      icon: SiExpo,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      title: "Livekit",
      icon: Livekit,
    },
    {
      title: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      title: "Docker",
      icon: SiDocker,
    },
    {
      title: "Terraform",
      icon: SiTerraform,
    },
    {
      title: "Amazon Web Services",
      icon: SiAmazonwebservices,
    },
  ] as const satisfies Skill[];

  const repeatedSkills = repeatArray(skills, 10);

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
    <div className="flex flex-col gap-20">
      <Timeline data={data} />

      <div>
        <motion.div
          variants={itemVariants}
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
            <Tooltip key={index} followCursor>
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
