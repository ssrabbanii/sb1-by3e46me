import type { FoodItem } from './types';

export const mockFoodItems: FoodItem[] = [
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