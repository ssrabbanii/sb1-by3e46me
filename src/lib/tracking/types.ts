export interface TrackingLocation {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TrackingInfo {
  orderId: string;
  pickupLocation: TrackingLocation;
  estimatedPickupTime: string;
  status: 'preparing' | 'ready' | 'picked-up';
}