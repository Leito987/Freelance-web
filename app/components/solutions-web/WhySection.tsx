import { motion } from 'framer-motion';

const problems = [
  {
    icon: '⚠️',
    number: '75%',
    title: 'Des prospects partent en 5 secondes',
    description:
      "Un site amateur, lent ou mal designé fait fuir vos clients potentiels avant même qu'ils ne lisent votre offre. Vous perdez 3 clients sur 4 à cause d'un site qui ne rassure pas.",
  },
  {
    icon: '📉',
    number: '60%',
    title: 'Des leads que vous ne captez pas',
    description:
      "Sans formulaire optimisé, sans parcours clair, sans preuves sociales : vos visiteurs repartent chez vos concurrents. Votre site ne convertit pas, il informe juste. C'est une carte de visite statique.",
  },
  {
    icon: '🔒',
    number: '100%',
    title: 'Prisonnier de votre outil',
    description:
      "Wix, Webflow, éditeurs propriétaires : vous ne possédez rien. Le jour où vous voulez partir, vous recommencez de zéro. Vous êtes otage de leur plateforme et de leurs tarifs qui augmentent chaque année.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ce que vous perdez chaque jour sans site professionnel
          </h2>
          <p className="text-xl text-slate-600">(ou avec un mauvais site)</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <div className="text-5xl font-bold text-red-600 mb-4">{problem.number}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">La vérité</h3>
              <p className="text-lg leading-relaxed opacity-95">
                Votre site n'est pas une dépense, c'est un investissement. Un bon site génère plus
                de leads, rassure vos prospects, et vous fait économiser des heures de réponses
                répétitives. Il travaille pour vous 24/7.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#offres"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Je veux un site qui travaille pour moi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
