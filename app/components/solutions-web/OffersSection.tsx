import { motion } from 'framer-motion';

export default function OffersSection() {
  return (
    <section id="offres" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            5 solutions pour 5 niveaux d'ambition
          </h2>
          <p className="text-xl text-slate-600">
            De la landing page au e-commerce complexe
          </p>
        </motion.div>
      </div>
    </section>
  );
}
