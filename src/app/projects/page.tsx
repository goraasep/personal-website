"use client";
import Link from "next/link";
import { FC } from "react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/const/projects";

const Projects: FC = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0f] cyber-grid text-cyan-100 px-4 sm:px-6 py-8 scanlines relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
      
      <section className="max-w-6xl mx-auto relative z-10">
        {/* Back Button at Top */}
        <div className="mb-6 animate-slide-in-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-400/40 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-sm"
          >
            <span className="text-lg">←</span> Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-8 sm:mb-12 animate-slide-in-up">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 text-cyan-400">
            &lt; Projects /&gt;
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">A collection of my recent work and side projects</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">▸</span> {projects.length} Projects
            </span>
            <span className="flex items-center gap-2">
              <span className="text-pink-400">▸</span> Full-stack Development
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">▸</span> IoT Solutions
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center py-8 border-t border-cyan-400/20 animate-slide-in-up">
          <p className="text-gray-400 text-sm mb-4">
            Interested in working together?
          </p>
          <Link
            href="https://wa.me/6282218328615?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you.%20Could%20we%20discuss%20a%20potential%20project?"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 border border-cyan-400/60 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 glow-on-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Projects;
