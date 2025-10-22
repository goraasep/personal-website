"use client";
import Link from "next/link";
import { FC } from "react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/const/projects";

const Projects: FC = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0f] cyber-grid text-cyan-100 px-4 sm:px-6 py-12 scanlines relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
      
      <section className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-cyan-400 animate-slide-in-up">
            &lt; Projects /&gt;
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 animate-slide-in-up stagger-1">Explore my recent work and side projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 animate-slide-in-up stagger-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-pink-400/60 text-pink-400 rounded-lg hover:bg-pink-400/10 hover:border-pink-400 transition-all duration-300 glow-on-hover"
          >
            <span className="text-xl">←</span> Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Projects;
