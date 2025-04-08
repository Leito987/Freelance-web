import { useState, useEffect } from "react";
import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import Container from "~/components/Container";
import ProjectCard from "~/components/ProjectCard";
import { projects, getProjectsByCategory } from "~/data/projects";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio | DevFreelance" },
    { name: "description", content: "Découvrez mes réalisations en développement web, mobile et design d'interface." },
  ];
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMounted, setIsMounted] = useState(false);
  const filteredProjects = getProjectsByCategory(activeCategory === "all" ? "all" : activeCategory);
  
  // Fix hydration mismatch by only enabling animations after client-side mount
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const categories = [
    { id: "all", name: "Tous" },
    { id: "E-commerce", name: "E-commerce" },
    { id: "Application Mobile", name: "Mobile" },
    { id: "Web Application", name: "Web App" },
    { id: "Site Web", name: "Site Web" },
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            {isMounted ? (
              <motion.h1 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Portfolio
              </motion.h1>
            ) : (
              <h1 className="text-4xl font-bold mb-6">
                Portfolio
              </h1>
            )}
            
            {isMounted ? (
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Découvrez une sélection de mes projets récents en développement web, mobile et design d'interface.
              </motion.p>
            ) : (
              <p className="text-xl mb-8">
                Découvrez une sélection de mes projets récents en développement web, mobile et design d'interface.
              </p>
            )}
          </div>
        </Container>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-20">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isMounted={isMounted} 
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <Container>
          <div className="text-center">
            {isMounted ? (
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Vous avez un projet similaire ?
              </motion.h2>
            ) : (
              <h2 className="text-3xl font-bold mb-4">
                Vous avez un projet similaire ?
              </h2>
            )}
            
            {isMounted ? (
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Je peux vous aider à concrétiser votre vision. Contactez-moi pour discuter de votre projet.
              </motion.p>
            ) : (
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Je peux vous aider à concrétiser votre vision. Contactez-moi pour discuter de votre projet.
              </p>
            )}
            
            {isMounted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button href="/contact" variant="primary">
                  Me contacter
                </Button>
              </motion.div>
            ) : (
              <div>
                <Button href="/contact" variant="primary">
                  Me contacter
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
