import { BusinessHero } from '@/components/business/hero';
import { Benefits } from '@/components/business/benefits';
import { Features } from '@/components/business/features';
import { Pricing } from '@/components/business/pricing';
import { Testimonials } from '@/components/business/testimonials';
import { JoinCTA } from '@/components/business/join-cta';

export function Business() {
  return (
    <div className="space-y-16">
      <BusinessHero />
      <Benefits />
      <Features />
      <Pricing />
      <Testimonials />
      <JoinCTA />
    </div>
  );
}