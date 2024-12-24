import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Clock, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Reach more customers and boost your sales with our platform.',
    stat: '35%',
    statLabel: 'Average Revenue Increase',
  },
  {
    icon: Users,
    title: 'Expand Reach',
    description: 'Connect with new customers in your area and beyond.',
    stat: '10k+',
    statLabel: 'Active Users Daily',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Streamline operations with our easy-to-use management tools.',
    stat: '5hrs',
    statLabel: 'Saved Per Week',
  },
  {
    icon: Heart,
    title: 'Make an Impact',
    description: 'Contribute to fighting hunger through our ByteBank initiative.',
    stat: '10%',
    statLabel: 'Of Sales to Food Banks',
  },
];

export function Benefits() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Partner With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join BudgetBites and transform your restaurant business while making 
          a difference in your community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="pt-4 border-t">
                <p className="text-2xl font-bold text-green-600">{benefit.stat}</p>
                <p className="text-sm text-gray-500">{benefit.statLabel}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}