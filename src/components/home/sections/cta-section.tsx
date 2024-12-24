import { Button } from '@/components/ui/button';
import { Store, User } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Hungry?</h3>
            <p className="text-gray-600 mb-6">
              Order from your favorite restaurants and make a difference with every meal.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.location.href = '/auth/sign-up'}
            >
              Order Now
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Store className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Restaurant Owner?</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to reach more customers and grow your business.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.location.href = '/business'}
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}