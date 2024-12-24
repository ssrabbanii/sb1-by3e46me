import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const cuisines = [
  {
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143',
    count: '250+ restaurants',
  },
  {
    name: 'Japanese',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
    count: '180+ restaurants',
  },
  {
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    count: '200+ restaurants',
  },
  {
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b',
    count: '150+ restaurants',
  },
];

export function PopularCuisines() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Popular Cuisines</h2>
          <p className="text-gray-600">Explore restaurants by your favorite cuisine</p>
        </div>
        <Button variant="outline" onClick={() => window.location.href = '/browse'}>
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cuisines.map((cuisine, index) => (
          <Card 
            key={index} 
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => window.location.href = '/browse'}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{cuisine.name}</h3>
                <p className="text-sm opacity-90">{cuisine.count}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}