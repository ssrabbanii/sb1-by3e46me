import { useEffect } from 'react';
import { useOfferStore } from '@/lib/offers/offer-store';
import { OfferCard } from '@/components/offers/offer-card';
import { mockOffers } from '@/lib/offers/mock-data';

export function Offers() {
  const offers = useOfferStore((state) => state.offers);

  useEffect(() => {
    // In a real app, fetch from API
    useOfferStore.setState({ offers: mockOffers });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Special Offers</h1>
          <p className="text-gray-600">
            Discover our latest deals and promotions to save on your favorite foods
          </p>
        </div>

        <div className="grid gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {offers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500">No active offers at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
}