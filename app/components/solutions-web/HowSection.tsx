import { motion } from 'framer-motion';

export default function HowSection() {
  return (
    <section id="methode" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Notre approche : Partenariat technique, pas prestation jetable
          </h2>
          <p className="text-xl text-slate-600">
            Nous ne vendons pas des sites web. Nous vendons une tranquillité numérique totale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
