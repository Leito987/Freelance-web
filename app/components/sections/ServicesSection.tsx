import { motion } from "framer-motion";
import Container from "~/components/Container";
import ServiceCard from "~/components/ServiceCard";
import Button from "~/components/Button";
import { services } from "~/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mes Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des solutions digitales sur mesure pour répondre à vos besoins spécifiques
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" variant="primary">
            Voir tous les services
          </Button>
        </div>
      </Container>
    </section>
  );
}
