import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { OfferStore } from './types';

export const useOfferStore = create<OfferStore>()(
  persist(
    (set, get) => ({
      offers: [],
      claimedOffers: [],
      claimOffer: (offerId) => {
        set((state) => ({
          claimedOffers: [...state.claimedOffers, offerId],
        }));
      },
      isOfferClaimed: (offerId) => {
        return get().claimedOffers.includes(offerId);
      },
    }),
    {
      name: 'offer-storage',
      version: 1,
    }
  )
);