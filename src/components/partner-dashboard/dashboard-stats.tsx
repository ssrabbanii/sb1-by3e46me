import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  DollarSign 
} from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$12,345',
    change: '+12.5%',
    icon: DollarSign,
    trend: 'up',
  },
  {
    label: 'Total Orders',
    value: '156',
    change: '+8.2%',
    icon: ShoppingBag,
    trend: 'up',
  },
  {
    label: 'New Customers',
    value: '32',
    change: '+15.3%',
    icon: Users,
    trend: 'up',
  },
  {
    label: 'Average Order',
    value: '$79.25',
    change: '+5.7%',
    icon: TrendingUp,
    trend: 'up',
  },
];

export function DashboardStats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div className="bg-green-100 p-3 rounded-lg">
                <Icon className="h-6 w-6 text-green-600" />
              </div>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}