import { create } from 'zustand';
import type { TrackingInfo } from './types';

interface TrackingStore {
  activeTracking: TrackingInfo | null;
  setActiveTracking: (tracking: TrackingInfo | null) => void;
}

export const useTrackingStore = create<TrackingStore>((set) => ({
  activeTracking: {
    orderId: 'HK123456',
    pickupLocation: {
      name: 'Pizza Express - Causeway Bay',
      address: '505 Hennessy Road, Causeway Bay, Hong Kong',
      coordinates: {
        lat: 22.2800,
        lng: 114.1850,
      },
    },
    estimatedPickupTime: new Date(Date.now() + 20 * 60000).toISOString(), // 20 mins from now
    status: 'preparing',
  },
  setActiveTracking: (tracking) => set({ activeTracking: tracking }),
}));