import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '99',
    description: 'Perfect for small restaurants just getting started',
    features: [
      'Basic order management',
      'Menu management',
      'Mobile app access',
      'Email support',
      'Basic analytics',
    ],
  },
  {
    name: 'Professional',
    price: '199',
    description: 'Ideal for growing restaurants with multiple locations',
    features: [
      'Advanced order management',
      'Priority support',
      'Advanced analytics',
      'Marketing tools',
      'API access',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large restaurant chains with specific needs',
    features: [
      'Custom solutions',
      'Dedicated account manager',
      'Custom reporting',
      'White-label options',
      'Priority development',
      'Custom API limits',
    ],
  },
];

export function Pricing() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best fits your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`p-6 ${
              plan.popular ? 'border-green-600 border-2' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">
                  {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-500">/month</span>
                )}
              </div>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
            <div className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              className={`w-full ${
                plan.popular 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-900 hover:bg-gray-800'
              }`}
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}