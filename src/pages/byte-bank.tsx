import { impactStats, beneficiaryStories, foodBanks } from '@/lib/bytebank/mock-data';
import { ImpactStats } from '@/components/bytebank/impact-stats';
import { BeneficiaryStoryCard } from '@/components/bytebank/beneficiary-story-card';
import { FoodBankCard } from '@/components/bytebank/food-bank-card';

export function ByteBank() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd59c5bc3f90')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold mb-4">
                Making a Difference, One Meal at a Time
              </h1>
              <p className="text-xl opacity-90">
                10% of every transaction on BudgetBites goes directly to local food banks,
                helping provide meals to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <ImpactStats stats={impactStats} />
      </section>

      {/* Beneficiary Stories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Stories of Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficiaryStories.map((story) => (
            <BeneficiaryStoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* Partner Food Banks */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Partner Food Banks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodBanks.map((foodBank) => (
            <FoodBankCard key={foodBank.id} foodBank={foodBank} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every order you place helps provide meals to families in need.
            Start making an impact today.
          </p>
          <button
            onClick={() => window.location.href = '/browse'}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Order Now & Make an Impact
          </button>
        </div>
      </section>
    </div>
  );
}