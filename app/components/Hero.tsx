import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 mix-blend-multiply" />
      </div>
      
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Solutions digitales sur mesure pour votre entreprise
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Développeur freelance spécialisé dans la création d'applications web et mobiles performantes, modernes et sécurisées.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              href="/services" 
              variant="primary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Découvrir mes services
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-blue-700"
            >
              Me contacter
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
