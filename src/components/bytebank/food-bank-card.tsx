import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { FoodBank } from '@/lib/bytebank/types';

interface FoodBankCardProps {
  foodBank: FoodBank;
}

export function FoodBankCard({ foodBank }: FoodBankCardProps) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={foodBank.image}
          alt={foodBank.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{foodBank.name}</h3>
          <p className="text-sm text-gray-500">{foodBank.location}</p>
        </div>
        <p className="text-gray-600">{foodBank.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Contributions</span>
            <span className="font-medium">${formatNumber(foodBank.contributionsReceived)}</span>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-sm text-gray-500">
            {formatNumber(foodBank.mealsProvided)} meals provided
          </p>
        </div>
      </div>
    </Card>
  );
}