import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  link: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  isMounted?: boolean;
};

export default function ProjectCard({ project, index, isMounted = false }: ProjectCardProps) {
  // Only use motion animations if client-side mounted to prevent hydration mismatch
  if (isMounted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      >
        <Link to={`/portfolio/${project.id}`} className="block">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
  
  // Fallback non-animated version for server-side rendering
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link to={`/portfolio/${project.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
