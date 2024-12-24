import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface FoodCardProps {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  image: string;
  cuisines: string[];
  dietary: string[];
}

export function FoodCard({
  id,
  name,
  restaurant,
  price,
  rating,
  image,
  cuisines,
  dietary,
}: FoodCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{restaurant}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            {cuisines.join(' • ')}
          </p>
          {dietary.length > 0 && (
            <div className="flex gap-2">
              {dietary.map((diet) => (
                <span
                  key={diet}
                  className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                >
                  {diet}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-semibold">${price.toFixed(2)}</span>
        <Button onClick={() => window.location.href = `/product?id=${id}`}>
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
}