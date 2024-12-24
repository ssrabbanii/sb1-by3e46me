import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function JoinCTA() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Restaurant Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join BudgetBites today and start reaching more customers while making 
          a positive impact in your community.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700"
          >
            Partner with Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}