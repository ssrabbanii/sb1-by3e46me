import { useState, useEffect } from 'react';
import type { OrderLocation } from '../types';

export function useOrderTracking(
  restaurantLocation: OrderLocation,
  deliveryLocation: OrderLocation,
  currentLocation?: OrderLocation
) {
  const [location, setLocation] = useState(currentLocation || restaurantLocation);

  useEffect(() => {
    if (currentLocation) {
      setLocation(currentLocation);
    }
  }, [currentLocation]);

  return {
    location,
    isMoving: !!currentLocation,
    distanceToDestination: calculateDistance(location, deliveryLocation),
  };
}

function calculateDistance(point1: OrderLocation, point2: OrderLocation): number {
  // Simple distance calculation - in a real app use proper geolocation
  const dx = point2.lat - point1.lat;
  const dy = point2.lng - point1.lng;
  return Math.sqrt(dx * dx + dy * dy);
}