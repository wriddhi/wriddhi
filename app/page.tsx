import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Hobbies } from "@/components/hobbies";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Hobbies />
      <Contact />
    </>
  );
}
