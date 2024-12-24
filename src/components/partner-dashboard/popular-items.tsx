import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const items = [
  {
    name: 'Margherita Pizza',
    orders: 245,
    revenue: '$3,678',
    progress: 85,
  },
  {
    name: 'Pepperoni Pizza',
    orders: 190,
    revenue: '$2,850',
    progress: 65,
  },
  {
    name: 'Garlic Bread',
    orders: 156,
    revenue: '$780',
    progress: 54,
  },
  {
    name: 'Caesar Salad',
    orders: 120,
    revenue: '$960',
    progress: 42,
  },
];

export function PopularItems() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Popular Items</h3>
          <p className="text-sm text-gray-500">Based on orders this month</p>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.orders} orders · {item.revenue}
                  </p>
                </div>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}