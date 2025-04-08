import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import Container from "~/components/Container";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "À Propos | DevFreelance" },
    { name: "description", content: "Découvrez mon parcours, mes compétences et ma vision en tant que développeur freelance." },
  ];
};

export default function About() {
  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "Python", "Django", "API REST"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"] },
    { category: "Base de données", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
    { category: "DevOps", items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"] },
    { category: "Outils", items: ["Figma", "Adobe XD", "Jira", "Notion", "VS Code"] },
  ];
  
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
              À Propos
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Développeur passionné avec plus de 8 ans d'expérience dans la création de solutions digitales innovantes.
            </motion.p>
          </div>
        </Container>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Portrait du développeur"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Qui suis-je ?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Bonjour ! Je suis un développeur web et mobile freelance basé à Paris, spécialisé dans la création d'applications web et mobiles performantes, modernes et sécurisées.
                </p>
                <p>
                  Avec plus de 8 ans d'expérience dans le développement logiciel, j'ai eu l'opportunité de travailler sur une grande variété de projets, des sites vitrines aux applications complexes, en passant par des plateformes e-commerce et des applications mobiles.
                </p>
                <p>
                  Ma passion pour les nouvelles technologies et mon souci du détail me permettent de créer des solutions sur mesure qui répondent parfaitement aux besoins de mes clients tout en offrant une expérience utilisateur exceptionnelle.
                </p>
                <p>
                  Je suis convaincu que la communication et la transparence sont les clés d'une collaboration réussie. C'est pourquoi je m'engage à tenir mes clients informés à chaque étape du projet et à être disponible pour répondre à leurs questions.
                </p>
              </div>
              
              <div className="mt-8">
                <Button href="/contact">
                  Me contacter
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mon Parcours
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Une chronologie de mon expérience professionnelle
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2023 - Présent",
                  title: "Développeur Freelance",
                  description: "Création de solutions digitales sur mesure pour des clients variés, du site vitrine à l'application complexe.",
                },
                {
                  year: "2020 - 2023",
                  title: "Lead Developer",
                  description: "Direction technique d'une équipe de développeurs pour la création d'applications web et mobiles innovantes.",
                },
                {
                  year: "2018 - 2020",
                  title: "Développeur Full Stack",
                  description: "Développement d'applications web et mobiles pour des startups et des entreprises établies.",
                },
                {
                  year: "2015 - 2018",
                  title: "Développeur Frontend",
                  description: "Création d'interfaces utilisateur modernes et responsives pour des applications web.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 ml-auto"}`}>
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
                        <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </>
                    ) : null}
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 1 ? "pl-12" : "pr-12 text-right ml-auto"}`}>
                    {index % 2 === 1 ? (
                      <>
                        <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
                        <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Skills Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mes Compétences
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Un aperçu des technologies et outils que j'utilise au quotidien
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mes Valeurs
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Les principes qui guident mon travail au quotidien
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Qualité",
                description: "Je m'engage à fournir un travail de haute qualité, en respectant les meilleures pratiques et en portant une attention particulière aux détails.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Innovation",
                description: "Je reste constamment à l'affût des nouvelles technologies et tendances pour proposer des solutions innovantes et performantes.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Communication",
                description: "Je crois en une communication claire et transparente pour assurer le succès de chaque projet et la satisfaction du client.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                title: "Fiabilité",
                description: "Je respecte les délais et les engagements pris, en faisant preuve de professionnalisme et de rigueur dans tous mes projets.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <Container>
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Prêt à collaborer ensemble ?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contactez-moi dès aujourd'hui pour discuter de votre projet et voir comment je peux vous aider à le concrétiser.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                href="/contact" 
                variant="primary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Me contacter
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
