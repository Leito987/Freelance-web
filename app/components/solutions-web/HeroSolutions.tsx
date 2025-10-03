import { motion } from 'framer-motion';

export default function HeroSolutions() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Votre site web n'est pas une carte de visite.{' '}
              <span className="text-blue-600">C'est votre outil de croissance le plus stratégique.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transformez votre présence digitale en machine à générer des leads qualifiés
              et à crédibiliser votre expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#offres"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Découvrir quelle solution me correspond
              </a>
              <a
                href="#methode"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors border-2 border-slate-200"
              >
                Voir comment on travaille
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Propriété 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hébergement France</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>WordPress (standard mondial)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Support inclus</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Sites qui convertissent
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="h-3 bg-slate-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="h-3 bg-blue-600 rounded w-2/3 mb-3"></div>
                  <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-slate-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">85%</div>
              <div className="text-sm">de vos prospects vous jugent sur votre site</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
