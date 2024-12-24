import { HowItWorksHero } from '@/components/how-it-works/hero';
import { ProcessSteps } from '@/components/how-it-works/process-steps';
import { Features } from '@/components/how-it-works/features';
import { FAQ } from '@/components/how-it-works/faq';

export function HowItWorks() {
  return (
    <div className="space-y-16">
      <HowItWorksHero />
      <ProcessSteps />
      <Features />
      <FAQ />
    </div>
  );
}