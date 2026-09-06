"use client";

import Link from "next/link";
import GlassSurface from "@/components/ui/glass-surface";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Menu } from "@/components/animate-ui/icons/menu";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { logo, navLinks } from "@/constants/data";

export const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 gap-1 md:gap-4 sticky top-0 z-50 bg-linear-180 from-background to-transparent">
      <GlassSurface height={40} width={120} distortionScale={-100}>
        <Link href="/#home">{logo}</Link>
      </GlassSurface>

      <span className="mr-auto" />

      <nav className="hidden md:flex items-center gap-4">
        <GlassSurface height={40} width={420} distortionScale={-100}>
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </GlassSurface>
      </nav>

      <ModeToggle />
      <nav className="flex md:hidden items-center gap-4">
        <Drawer direction="top">
          <GlassSurface height={40} width={40} distortionScale={-100}>
            <DrawerTrigger asChild>
              <AnimateIcon animateOnHover>
                <Menu className="size-4" />
              </AnimateIcon>
            </DrawerTrigger>
          </GlassSurface>
          <DrawerContent className="rounded-b-4xl!">
            <DrawerHeader>
              <DrawerTitle>{logo}</DrawerTitle>
              <DrawerDescription>
                Find out a bit more about me.
              </DrawerDescription>
            </DrawerHeader>
            <ul className="no-scrollbar overflow-y-auto px-4 space-y-4 text-lg">
              {navLinks.map((link) => (
                <li key={link.name} className="text-center">
                  <Link className="font-serif text-center" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};
