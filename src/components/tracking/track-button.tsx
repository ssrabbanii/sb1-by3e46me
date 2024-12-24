import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';
import { useTrackingStore } from '@/lib/tracking/tracking-store';
import { TrackingPopup } from './tracking-popup';

export function TrackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const tracking = useTrackingStore((state) => state.activeTracking);

  if (!tracking) return null;

  return (
    <>
      <Button
        variant="outline"
        className="text-green-600"
        onClick={() => setIsOpen(true)}
      >
        <Navigation className="h-4 w-4 mr-2" />
        Track Pickup
      </Button>
      <TrackingPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}