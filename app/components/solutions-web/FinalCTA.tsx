import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre présence digitale ?
          </h2>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
