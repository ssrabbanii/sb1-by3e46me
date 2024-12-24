import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Clock, MapPin } from 'lucide-react';
import { useTrackingStore } from '@/lib/tracking/tracking-store';
import { formatTime } from '@/lib/orders/utils/format-utils';

interface TrackingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrackingPopup({ isOpen, onClose }: TrackingPopupProps) {
  const tracking = useTrackingStore((state) => state.activeTracking);

  if (!tracking) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Track Your Order</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Estimated Pickup Time</span>
            </div>
            <p className="text-lg font-semibold">
              {formatTime(tracking.estimatedPickupTime)}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-gray-500 mt-1" />
              <div>
                <p className="font-medium">{tracking.pickupLocation.name}</p>
                <p className="text-sm text-gray-600">
                  {tracking.pickupLocation.address}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => {
                window.open(
                  `https://maps.google.com/?q=${tracking.pickupLocation.coordinates.lat},${tracking.pickupLocation.coordinates.lng}`,
                  '_blank'
                );
              }}
            >
              Get Directions
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}