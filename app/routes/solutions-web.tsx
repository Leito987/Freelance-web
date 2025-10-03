import type { MetaFunction } from '@remix-run/node';
import HeroSolutions from '~/components/solutions-web/HeroSolutions';
import WhySection from '~/components/solutions-web/WhySection';
import HowSection from '~/components/solutions-web/HowSection';
import OffersSection from '~/components/solutions-web/OffersSection';
import ComparisonSection from '~/components/solutions-web/ComparisonSection';
import TestimonialsWebSection from '~/components/solutions-web/TestimonialsWebSection';
import PriceCalculator from '~/components/solutions-web/PriceCalculator';
import FAQSection from '~/components/solutions-web/FAQSection';
import FinalCTA from '~/components/solutions-web/FinalCTA';

export const meta: MetaFunction = () => {
  return [
    { title: 'Solutions Sites Web - Cleveko | Votre partenaire digital' },
    {
      name: 'description',
      content:
        'Transformez votre présence digitale en machine à générer des leads. Sites WordPress professionnels de 69€/mois. Propriété 100%, hébergement France, support inclus.',
    },
  ];
};

export default function SolutionsWeb() {
  return (
    <div className="min-h-screen">
      <HeroSolutions />
      <WhySection />
      <HowSection />
      <OffersSection />
      <ComparisonSection />
      <TestimonialsWebSection />
      <PriceCalculator />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
