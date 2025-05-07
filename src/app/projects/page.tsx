"use client";
import Link from "next/link";
import { FC } from "react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/const/projects";

const Projects: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 text-gray-800 px-4 sm:px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/"
            className="text-sky-600 underline hover:text-sky-800 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Projects;
