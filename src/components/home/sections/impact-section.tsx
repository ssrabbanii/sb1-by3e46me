import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Utensils } from 'lucide-react';

const stats = [
  {
    icon: Heart,
    value: '$1.2M+',
    label: 'Contributed',
  },
  {
    icon: Utensils,
    value: '500K+',
    label: 'Meals Provided',
  },
  {
    icon: Users,
    value: '25K+',
    label: 'Families Helped',
  },
];

export function ImpactSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Making a Real Impact</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Every order on BudgetBites contributes to fighting hunger in your community. 
            10% of each transaction goes directly to local food banks, helping provide 
            meals to families in need.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </Card>
            ))}
          </div>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.location.href = '/byte-bank'}
          >
            Learn More About ByteBank
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd59c5bc3f90"
            alt="Community Impact"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <p className="text-lg font-medium mb-2">
              "BudgetBites has helped us serve 50% more families this year."
            </p>
            <p className="text-sm text-gray-500">
              - Sarah Johnson, Local Food Bank Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}