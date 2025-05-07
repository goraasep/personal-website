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
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4">
      {/* Carousel */}
      <div ref={ref} className="keen-slider rounded-xl overflow-hidden mb-4">
        {project.images.map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide w-full h-48 bg-gray-200 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Project Info */}
      <h2 className="text-xl font-semibold text-sky-700">{project.title}</h2>
      <p className="text-gray-700 mt-2 text-sm">{project.description}</p>

      {/* Tech Stack */}
      <ul className="flex flex-wrap gap-2 mt-4 text-xs text-gray-600">
        {project.tech.map((t, i) => (
          <li key={i} className="bg-sky-100 text-sky-800 px-2 py-1 rounded">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
