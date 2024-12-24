import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

interface OrderMapProps {
  restaurantLocation: {
    lat: number;
    lng: number;
  };
  deliveryLocation: {
    lat: number;
    lng: number;
  };
  currentLocation?: {
    lat: number;
    lng: number;
  };
}

export function OrderMap({
  restaurantLocation,
  deliveryLocation,
  currentLocation,
}: OrderMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real app, implement Google Maps or another mapping service
    // For now, we'll show a placeholder with simulated movement
  }, [restaurantLocation, deliveryLocation, currentLocation]);

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-medium">Delivery Route</h3>
      </div>
      <div className="relative">
        <div
          ref={mapRef}
          className="h-[300px] bg-gray-100 flex items-center justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">Restaurant</span>
            </div>
            <div className="w-24 h-px bg-gray-300 relative">
              <Navigation className="h-4 w-4 text-green-600 absolute -top-2 left-1/2 -translate-x-1/2 animate-bounce" />
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-500">Your Location</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}