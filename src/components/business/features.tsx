import { Card } from '@/components/ui/card';
import {
  LayoutDashboard, ChartBar, Bell, Smartphone,
  Printer, Settings, CreditCard, MessageSquare
} from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Intuitive Dashboard',
    description: 'Manage orders, menu, and analytics all in one place.',
  },
  {
    icon: ChartBar,
    title: 'Advanced Analytics',
    description: 'Track sales, customer behavior, and business performance.',
  },
  {
    icon: Bell,
    title: 'Real-time Notifications',
    description: 'Instant alerts for new orders and updates.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Manage your business on the go with our mobile app.',
  },
  {
    icon: Printer,
    title: 'Order Management',
    description: 'Streamlined order processing and delivery tracking.',
  },
  {
    icon: Settings,
    title: 'Menu Management',
    description: 'Easy menu updates and item customization.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Fast and secure payment processing with detailed reporting.',
  },
  {
    icon: MessageSquare,
    title: '24/7 Support',
    description: 'Dedicated support team to help you succeed.',
  },
];

export function Features() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage and grow your restaurant business
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-green-600 bg-green-50 p-3 rounded-lg">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}