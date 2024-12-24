import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Copy, Check } from 'lucide-react';
import { useOfferStore } from '@/lib/offers/offer-store';
import type { Offer } from '@/lib/offers/types';
import { toast } from 'sonner';

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  const [copied, setCopied] = useState(false);
  const { claimOffer, isOfferClaimed } = useOfferStore();
  const claimed = isOfferClaimed(offer.id);

  const timeLeft = new Date(offer.expiresAt).getTime() - Date.now();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.ceil(timeLeft / (1000 * 60 * 60));

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Promo code copied to clipboard!');
  };

  const handleClaim = () => {
    claimOffer(offer.id);
    copyCode();
  };

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[2/1] relative">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="bg-white/90">
            {offer.type === 'discount' ? `${offer.discount}% OFF` : offer.type}
          </Badge>
          {offer.minOrder && (
            <Badge variant="secondary" className="bg-white/90">
              Min. ${offer.minOrder}
            </Badge>
          )}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
          <p className="text-gray-600">{offer.description}</p>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>
            Expires in {daysLeft > 0 ? `${daysLeft} days` : `${hoursLeft} hours`}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={offer.code}
              readOnly
              className="w-full px-4 py-2 bg-gray-50 rounded-md font-mono text-sm"
            />
            <button
              onClick={copyCode}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <Button
            onClick={handleClaim}
            disabled={claimed}
            className="bg-green-600 hover:bg-green-700"
          >
            {claimed ? 'Claimed' : 'Claim Offer'}
          </Button>
        </div>

        <div className="text-sm text-gray-500">
          <p className="font-medium mb-1">Terms & Conditions:</p>
          <ul className="list-disc list-inside space-y-1">
            {offer.termsAndConditions.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}