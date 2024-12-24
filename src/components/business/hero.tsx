import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function BusinessHero() {
  return (
    <section className="relative h-[500px] -mt-6">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Grow Your Restaurant Business with BudgetBites
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of successful restaurants reaching more customers and 
              increasing their revenue while making a positive impact in the community.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.location.href = '/business/register'}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 border-white"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}