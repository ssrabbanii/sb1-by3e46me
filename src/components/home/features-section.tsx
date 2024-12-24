import { Clock, MapPin, Utensils } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Utensils,
    title: 'Wide Selection',
    description: 'Choose from thousands of restaurants and cuisines',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Get your food delivered in 30 minutes or less',
  },
  {
    icon: MapPin,
    title: 'Local Partners',
    description: 'Support your local restaurants and businesses',
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose BudgetBites?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}