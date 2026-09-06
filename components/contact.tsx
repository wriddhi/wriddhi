"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";
import {
  contactOptions,
  contactText,
  location,
  name,
  showDeveloperText,
} from "@/constants/data";

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
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

  const primaryLinks = [
    { label: "Email", detail: "Contact Me", href: contactOptions.Email },
    {
      label: "LinkedIn",
      detail: "Professional Profile",
      href: contactOptions.LinkedIn,
    },
    {
      label: "Resume",
      detail: "View PDF",
      href: contactOptions.Resume,
    },
  ] as const;

  const socialLinks = [
    { label: "GitHub", href: contactOptions.GitHub },
    { label: "LinkedIn", href: contactOptions.LinkedIn },
    { label: "Twitter(X)", href: contactOptions["Twitter(X)"] },
    { label: "BlueSky", href: contactOptions.BlueSky },
  ] as const;

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-6 my-16 md:my-28 scroll-mt-20 pb-32"
    >
      <motion.div
        className="space-y-8 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-4 max-w-2xl">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {contactText}
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {primaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group border border-border border-dotted rounded-xl p-5 hover:bg-muted/40 transition-colors"
            >
              <p className="font-serif text-xl">{link.label}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {link.detail}
              </p>
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 pt-2"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RippleButton variant="outline" className="cursor-pointer">
                {link.label}
                <RippleButtonRipples />
              </RippleButton>
            </a>
          ))}
        </motion.div>

        <motion.footer
          variants={itemVariants}
          className="pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground font-mono"
        >
          <p>
            {name}
            <span className="mx-2 text-foreground/30">|</span>
            {location}
          </p>
          <p>
            © {new Date().getFullYear()} {name}
            {showDeveloperText ? " · Built with care" : null}
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};
