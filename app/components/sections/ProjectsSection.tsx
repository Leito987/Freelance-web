import { motion } from "framer-motion";
import Container from "~/components/Container";
import ProjectCard from "~/components/ProjectCard";
import Button from "~/components/Button";
import { projects } from "~/data/projects";

export default function ProjectsSection() {
  // Limit projects to 3 for the homepage
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-20 bg-gray-100">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projets Récents
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez quelques-unes de mes réalisations récentes
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/portfolio" variant="primary">
            Voir tous les projets
          </Button>
        </div>
      </Container>
    </section>
  );
}
