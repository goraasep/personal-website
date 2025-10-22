import { Project } from "@/type/project";
import { useKeenSlider } from "keen-slider/react";
import { FC } from "react";
interface ProjectCardProps {
  project: Project;
}
const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1 },
  });

  return (
    <div className="bg-[#1a1a2e]/80 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 p-4 group relative corner-accent glow-on-hover animate-slide-in-up">
      {/* Carousel */}
      <div ref={ref} className="keen-slider rounded-xl overflow-hidden mb-4 border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors relative">
        {project.images.map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide w-full h-48 bg-black/30 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
        {/* Image counter */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-gray-300">
          {project.images.length} images
        </div>
      </div>

      {/* Project Info */}
      <h2 className="text-xl font-semibold text-cyan-400 group-hover:text-pink-400 transition-colors flex items-center gap-2">
        {project.title}
        <span className="text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </h2>
      <p className="text-gray-300 mt-2 text-sm line-clamp-2">{project.description}</p>

      {/* Tech Stack */}
      <ul className="flex flex-wrap gap-2 mt-4 text-xs text-gray-300">
        {project.tech.map((t, i) => (
          <li key={i} className="bg-black/30 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all cursor-default">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
