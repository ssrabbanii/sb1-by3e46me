import { FoodCard } from './food-card';
import { SearchParams } from '@/hooks/use-search-params';
import { useMemo } from 'react';

interface FoodGridProps {
  searchParams: SearchParams;
}

// Mock data - in a real app, this would come from an API
const mockFoodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    restaurant: 'Pizza Express',
    price: 12.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
    cuisines: ['Italian'],
    dietary: ['Vegetarian'],
  },
  {
    id: 2,
    name: 'Chicken Teriyaki',
    restaurant: 'Sushi House',
    price: 15.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
    cuisines: ['Japanese'],
    dietary: ['Halal'],
  },
  {
    id: 3,
    name: 'Vegan Buddha Bowl',
    restaurant: 'Green Kitchen',
    price: 14.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    cuisines: ['American'],
    dietary: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 4,
    name: 'Butter Chicken',
    restaurant: 'Taj Palace',
    price: 16.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    cuisines: ['Indian'],
    dietary: ['Halal'],
  },
];

export function FoodGrid({ searchParams }: FoodGridProps) {
  const filteredItems = useMemo(() => {
    return mockFoodItems.filter((item) => {
      // Filter by search term
      if (searchParams.search && !item.name.toLowerCase().includes(searchParams.search.toLowerCase())) {
        return false;
      }

      // Filter by cuisines
      if (searchParams.cuisines?.length && !item.cuisines.some(cuisine => 
        searchParams.cuisines!.includes(cuisine)
      )) {
        return false;
      }

      // Filter by dietary preferences
      if (searchParams.dietary?.length && !item.dietary.some(diet => 
        searchParams.dietary!.includes(diet)
      )) {
        return false;
      }

      // Filter by price range
      if (searchParams.priceRanges?.length) {
        const matchesPrice = searchParams.priceRanges.some(range => {
          const [min, max] = range.split('-').map(Number);
          if (max === undefined) {
            return item.price >= min;
          }
          return item.price >= min && item.price <= max;
        });
        if (!matchesPrice) return false;
      }

      return true;
    });
  }, [searchParams]);

  if (filteredItems.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center h-[400px] bg-white rounded-lg">
        <p className="text-gray-500">No items found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <FoodCard key={item.id} {...item} />
      ))}
    </div>
  );
}