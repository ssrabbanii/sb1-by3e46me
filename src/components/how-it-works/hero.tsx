import { Button } from '@/components/ui/button';

export function HowItWorksHero() {
  return (
    <section className="relative h-[400px] -mt-6">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615719413546-198b25453f85')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">
              Order, Eat, and Support Local
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Discover how BudgetBites makes food ordering simple while supporting local 
              restaurants and contributing to food banks.
            </p>
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.location.href = '/browse'}
            >
              Start Ordering
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}