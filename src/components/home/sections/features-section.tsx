import { Card } from '@/components/ui/card';
import { 
  Utensils, Clock, MapPin, CreditCard, 
  Gift, Shield, HeartHandshake, Leaf 
} from 'lucide-react';

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
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Multiple payment options with secure processing',
  },
  {
    icon: Gift,
    title: 'Exclusive Offers',
    description: 'Regular discounts and special promotions',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Verified restaurants and quality control',
  },
  {
    icon: HeartHandshake,
    title: 'Community Impact',
    description: '10% of orders support local food banks',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable packaging and local sourcing',
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose BudgetBites?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We combine convenience, quality, and social impact to create the best food 
          delivery experience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="text-green-600 bg-green-50 p-3 rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}