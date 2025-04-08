import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import Container from "~/components/Container";
import Button from "~/components/Button";
import { ClientOnly } from "~/utils/client-only";
import ServicesSection from "~/components/sections/ServicesSection";
import ProjectsSection from "~/components/sections/ProjectsSection";
import BlogSection from "~/components/sections/BlogSection";
import TestimonialsSection from "~/components/sections/TestimonialsSection";

export const meta: MetaFunction = () => {
  return [
    { title: "DevFreelance | Développeur Web & Mobile Freelance" },
    { name: "description", content: "Développeur freelance spécialisé dans la création d'applications web et mobiles performantes, modernes et sécurisées." },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      
      <ClientOnly>
        {() => <BlogSection />}
      </ClientOnly>
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Button 
              href="/contact" 
              variant="primary"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Me contacter
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
