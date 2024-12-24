import { HeroSection } from '@/components/home/sections/hero-section';
import { FeaturesSection } from '@/components/home/sections/features-section';
import { PopularCuisines } from '@/components/home/sections/popular-cuisines';
import { ImpactSection } from '@/components/home/sections/impact-section';
import { CTASection } from '@/components/home/sections/cta-section';

export function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <FeaturesSection />
      <PopularCuisines />
      <ImpactSection />
      <CTASection />
    </div>
  );
}