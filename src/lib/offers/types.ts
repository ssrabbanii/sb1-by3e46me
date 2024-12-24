export type OfferType = 'discount' | 'freeDelivery' | 'buyOneGetOne' | 'reward';

export interface Offer {
  id: string;
  type: OfferType;
  title: string;
  description: string;
  code: string;
  discount?: number;
  minOrder?: number;
  expiresAt: string;
  termsAndConditions: string[];
  image: string;
  restaurantIds?: string[];
}

export interface OfferStore {
  offers: Offer[];
  claimedOffers: string[];
  claimOffer: (offerId: string) => void;
  isOfferClaimed: (offerId: string) => boolean;
}