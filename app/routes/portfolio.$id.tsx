import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import Container from "~/components/Container";
import Button from "~/components/Button";
import { getProjectById, projects } from "~/data/projects";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const project = getProjectById(params.id || "");
  
  if (!project) {
    throw new Response("Projet non trouvé", { status: 404 });
  }
  
  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);
  
  return json({ project, relatedProjects });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: "Projet non trouvé | DevFreelance" },
      { name: "description", content: "Le projet que vous recherchez n'existe pas." },
    ];
  }
  
  return [
    { title: `${data.project.title} | Portfolio | DevFreelance` },
    { name: "description", content: data.project.description },
  ];
};

export default function ProjectDetail() {
  const { project, relatedProjects } = useLoaderData<typeof loader>();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1 text-sm font-medium bg-blue-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Project Image */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </Container>
      </section>
      
      {/* Project Details */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">À propos du projet</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                </p>
                <p>
                  Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                </p>
                <h3 className="text-xl font-bold mt-8 mb-4">Défis</h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc.</li>
                  <li>Quis aliquam nisl nunc quis nisl.</li>
                  <li>Nullam euismod, nisl eget aliquam ultricies.</li>
                </ul>
                <h3 className="text-xl font-bold mt-8 mb-4">Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Informations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Catégorie</h4>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Client</h4>
                    <p>Entreprise XYZ</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Année</h4>
                    <p>2023</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Rôle</h4>
                    <p>Développeur Full Stack</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-1 text-xs font-medium bg-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button
                    href="/contact"
                    className="w-full"
                  >
                    Discuter d'un projet similaire
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 bg-gray-100">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Projets similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link to={`/portfolio/${relatedProject.id}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button href="/portfolio" variant="outline">
                Voir tous les projets
              </Button>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
