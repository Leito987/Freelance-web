import { motion } from 'framer-motion';

export default function PriceCalculator() {
  return (
    <section id="calculateur" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Estimez le prix de votre projet
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
