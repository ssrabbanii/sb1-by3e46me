import { Search, ShoppingBag, Clock, Heart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse & Choose',
    description: 'Explore local restaurants and filter by cuisine, price, or dietary preferences.',
  },
  {
    icon: ShoppingBag,
    title: 'Place Your Order',
    description: 'Select your items, customize as needed, and add them to your cart.',
  },
  {
    icon: Clock,
    title: 'Track in Real-Time',
    description: 'Follow your order from preparation to delivery with live updates.',
  },
  {
    icon: Heart,
    title: 'Make an Impact',
    description: '10% of every order goes to local food banks to help those in need.',
  },
];

export function ProcessSteps() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How BudgetBites Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get your favorite food delivered in four simple steps while making a difference 
          in your community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <step.icon className="h-8 w-8 text-green-600" />
            </div>
            <div className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full border-t-2 border-dashed border-gray-200" />
              )}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}