import { Button } from '@/components/ui/button';
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { Search, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[600px] -mt-6 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl font-bold mb-6">
            Delicious food that won't break the bank
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Order from your favorite local restaurants with free delivery on your first order. 
            Plus, every order helps provide meals to those in need through our ByteBank initiative.
          </p>
          <div className="flex gap-4 max-w-xl bg-white p-2 rounded-lg">
            <InputWithIcon
              placeholder="Enter your delivery address"
              className="flex-1"
              icon={<MapPin className="h-4 w-4" />}
            />
            <Button className="bg-green-600 hover:bg-green-700">
              <Search className="h-4 w-4 mr-2" />
              Find Food
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}